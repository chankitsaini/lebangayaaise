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
    tag: "Chapter 01",
    image: "/images/chapter1.jpg",
    imageAlt: "A favorite photo from the day we first met",
    title: "The day our paths crossed",
    text: "I still remember that first conversation—the easy laugh, the little pause before goodbye, and the feeling that I wanted just five more minutes. I didn't know what was beginning yet. I only knew the day felt brighter after meeting you.",
  },
  {
    tag: "Chapter 02",
    image: "/images/chapter2.jpg",
    imageAlt: "A sweet memory from when we were getting to know each other",
    title: "Little by little",
    text: "Then came the long talks, the tiny discoveries, and the messages that made ordinary afternoons feel special. I learned how you take your coffee, what makes you laugh without trying, and how comfortable silence can be with the right person.",
  },
  {
    tag: "Chapter 03",
    image: "/images/chapter3.jpg",
    imageAlt: "A photo from our first adventure together",
    title: "Our first adventure",
    text: "We had a loose plan and absolutely no idea where the day would take us. Somehow, even the wrong turn became part of the fun. That was when I realized adventures aren't really about the place—they're about who is beside you.",
  },
  {
    tag: "Chapter 04",
    image: "/images/chapter4.jpg",
    imageAlt: "A funny candid photo from one of our favorite memories",
    title: "The moments we still laugh about",
    text: "Some of my favorite memories are the ones that went completely off-script: the terrible photo, the joke no one else understands, the time we laughed until we couldn't speak. Life with you has the best outtakes.",
  },
  {
    tag: "Chapter 05",
    image: "/images/chapter5.jpg",
    imageAlt: "A meaningful photo that reminds us how close we have grown",
    title: "Becoming our own little team",
    text: "Somewhere between the big days and the quiet ones, you became the person I wanted to tell everything to. We learned how to cheer each other on, how to listen, and how to make even a regular Tuesday feel like home.",
  },
  {
    tag: "Chapter 06",
    image: "/images/chapter6.jpg",
    imageAlt: "A hopeful photo representing the future we imagine together",
    title: "All the chapters still ahead",
    text: "I don't know every detail of what comes next, but I know what I hope for: more slow mornings, more ridiculous jokes, more places to discover, and more ordinary days made wonderful because they're ours. This story is only getting started.",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Our Little Love Story" },
      {
        name: "description",
        content: "A warm, personal love story told through six treasured chapters.",
      },
      { property: "og:title", content: "Our Little Love Story" },
      {
        property: "og:description",
        content: "A warm, personal love story told through six treasured chapters.",
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
          Our Little Love Story
        </a>
        <p>made with love, just for you <span aria-hidden="true">☀</span></p>
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
