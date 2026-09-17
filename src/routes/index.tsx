import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useState } from "react";

type Chapter = {
  tag: string;
  image: string;
  imageAlt: string;
  title: string;
  text: string;
};

// Replace these details and image paths with your own memories.
const chapters: Chapter[] = [
  {
    tag: "   01",
    image: "/images/chapter1.jpg",
    imageAlt: "A favorite photo from the day we first met",
    title: "The Unexpected Hello",
    text: "It all started when he came up to me and asked for my Instagram. Somehow, that little moment became the beginning of our conversations. What started with a simple request turned into us talking, laughing, and slowly getting to know each other. I didn't know it then, but that small “hello” was about to become a really special part of my story.",
  },
  {
    tag: "Chapter 02",
    image: "/images/chapter2.jpg",
    imageAlt: "A sweet memory from when we were getting to know each other",
    title: "From Strangers to Friends",
    text: "After talking for a while, we finally met. There was something surprisingly easy about being around each other. We clicked, laughed, and just enjoyed each other's company. Before anything else, we became friends - the kind where conversations never really seem to end and spending time together feels effortless.",
  },
  {
    tag: "Chapter 03",
    image: "/images/chapter3.jpg",
    imageAlt: "A photo from our first adventure together",
    title: "First Meet, First Drive",
    text: "We had a loose plan and absolutely no idea where the day would take us. Somehow, even the wrong turn became part of the fun. That was when I realized adventures aren't really about the place, they're about who is beside you.",
  },
  {
    tag: "Chapter 04",
    image: "/images/chapter4.jpg",
    imageAlt: "A funny candid photo from one of our favorite memories",
    title: "Sunflowers & Playful Days",
    text: "Somewhere along the way, our friendship became filled with little adventures and even sweeter memories. We tried paddle tennis together for the first time, turning a simple match into endless laughs, playful competition, and lots of fun. And then there were the sunflowers ,  bright, cheerful, and somehow perfectly me. 🌻",
  },
  {
    tag: "Chapter 05",
    image: "/images/chapter5.jpg",
    imageAlt: "A meaningful photo that reminds us how close we have grown",
    title: "Just Flowing With Life",
    text: "Somewhere between the big days and the quiet ones, you became the person I wanted to tell everything to. We learned how to cheer each other on, how to listen, and how to make even a regular Tuesday feel like home.",
  },
  {
    tag: "Chapter 06",
    image: "/images/chapter6.jpg",
    imageAlt: "A hopeful photo representing the future we imagine together",
    title: "Cozy Pandas & Future Funtimes",
    text: "Behind all the fun, adventures, and craziness, there is a really soft and comfortable side to us. From laughing over the smallest things to ending the day curled up together like two cozy pandas, it's the little moments that make everything feel special. We started as two people who simply began talking after he asked for my Instagram, became friends, and somehow created so many memories together. And honestly, I think this story still has plenty of chapters left to write.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Story ☼ From My Side" },
      {
        name: "description",
        content: "",
      },
      { property: "og:title", content: "Our Little Love Story" },
      {
        property: "og:description",
        content: "",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const chapter = chapters[chapterIndex];

  const changeChapter = useCallback(
    (nextIndex: number) => {
      if (nextIndex === chapterIndex || isChanging) return;
      setIsChanging(true);
      window.setTimeout(() => {
        setChapterIndex(nextIndex);
        setImageFailed(false);
        setIsChanging(false);
      }, 220);
    },
    [chapterIndex, isChanging],
  );

  const previous = useCallback(() => {
    if (chapterIndex > 0) changeChapter(chapterIndex - 1);
  }, [chapterIndex, changeChapter]);

  const next = useCallback(() => {
    changeChapter(chapterIndex === chapters.length - 1 ? 0 : chapterIndex + 1);
  }, [chapterIndex, changeChapter]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") previous();
      if (event.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [next, previous]);

  if (!chapter) return null;

  return (
    <div className="storybook-shell">
      <div className="background-blob blob-one" aria-hidden="true" />
      <div className="background-blob blob-two" aria-hidden="true" />
      <span className="page-sparkle sparkle-one" aria-hidden="true">✦</span>
      <span className="page-sparkle sparkle-two" aria-hidden="true">♡</span>

      <header className="story-header">
        <a className="story-logo" href="#story" aria-label="Our Little Love Story, return to the story">
          <span className="logo-heart" aria-hidden="true">♥</span>
          Our Story ☼ From My Side
        </a>
        <p>we are just friends! <span aria-hidden="true">☀</span></p>
      </header>

      <main id="story" className="story-stage">
        <article className="story-card" aria-live="polite" aria-atomic="true">
          <div className="card-decoration flower" aria-hidden="true">✿</div>
          <div className="card-decoration tiny-heart" aria-hidden="true">♥</div>

          <nav className="chapter-dots" aria-label="Choose a chapter">
            {chapters.map((item, index) => (
              <button
                key={item.tag}
                type="button"
                className={index === chapterIndex ? "chapter-dot active" : "chapter-dot"}
                onClick={() => changeChapter(index)}
                aria-label={`Open ${item.tag}: ${item.title}`}
                aria-current={index === chapterIndex ? "step" : undefined}
              />
            ))}
          </nav>

          <div className={isChanging ? "chapter-content changing" : "chapter-content"}>
            <div className="chapter-visual">
              {!imageFailed ? (
                <img
                  key={chapter.image}
                  src={chapter.image}
                  alt={chapter.imageAlt}
                  onError={() => setImageFailed(true)}
                />
              ) : (
                <div className="image-fallback" role="img" aria-label={`${chapter.imageAlt}; add your photo here`}>
                  <span aria-hidden="true">♡</span>
                  <small>Add your photo</small>
                </div>
              )}
            </div>

            <div className="chapter-copy">
              <p className="chapter-tag">{chapter.tag}</p>
              <h1>{chapter.title}</h1>
              <span className="title-flourish" aria-hidden="true">♥</span>
              <p className="chapter-text">{chapter.text}</p>
            </div>
          </div>

          <div className="story-controls">
            <div className="control-slot">
              {chapterIndex > 0 && (
                <button type="button" className="story-button secondary-button" onClick={previous}>
                  <span aria-hidden="true">←</span> Back
                </button>
              )}
            </div>
            <p className="progress-copy" aria-label={`Chapter ${chapterIndex + 1} of ${chapters.length}`}>
              {chapterIndex + 1} <span>/</span> {chapters.length}
            </p>
            <div className="control-slot control-slot-end">
              <button type="button" className="story-button primary-button" onClick={next}>
                {chapterIndex === chapters.length - 1 ? "Restart" : "Next"}
                <span aria-hidden="true">{chapterIndex === chapters.length - 1 ? "↻" : "→"}</span>
              </button>
            </div>
          </div>
          <div className="progress-track" aria-hidden="true">
            <span style={{ width: `${((chapterIndex + 1) / chapters.length) * 100}%` }} />
          </div>
        </article>
      </main>

      <footer className="story-footer">
        <p>Every page is better with you in it <span aria-hidden="true">♥</span></p>
      </footer>
    </div>
  );
}
