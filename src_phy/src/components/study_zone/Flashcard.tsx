import { useState } from "react";

const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Fraunces:ital,wght@0,300;0,600;1,300&display=swap');

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: #0f0f0f;
    color: #e8e4dc;
    font-family: 'DM Mono', monospace;
    min-height: 100vh;
  }

  .app {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 2rem;
    gap: 2rem;
  }

  .header {
    display: flex;
    width: 100%;
    max-width: 700px;
    justify-content: space-between;
    align-items: center;
  }

  .title {
    font-family: 'Fraunces', serif;
    font-size: 1.4rem;
    font-weight: 300;
    color: #e8e4dc;
    letter-spacing: -0.02em;
  }

  .add-btn {
    background: none;
    border: 1px solid #3a3a3a;
    color: #888;
    padding: 0.4rem 1rem;
    border-radius: 999px;
    cursor: pointer;
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem;
    transition: all 0.2s;
  }
  .add-btn:hover { border-color: #e8e4dc; color: #e8e4dc; }

  .topics {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    max-width: 700px;
  }

  .topic-chip {
    background: none;
    border: 1px solid #2a2a2a;
    color: #555;
    padding: 0.3rem 0.9rem;
    border-radius: 999px;
    cursor: pointer;
    font-family: 'DM Mono', monospace;
    font-size: 0.7rem;
    transition: all 0.2s;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
  .topic-chip:hover { border-color: #555; color: #888; }
  .topic-chip.active { border-color: #e8e4dc; color: #e8e4dc; background: #1a1a1a; }

  .card-scene {
    width: 560px;
    height: 315px;
    perspective: 1200px;
    cursor: pointer;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.55s cubic-bezier(0.23, 1, 0.32, 1);
    border-radius: 16px;
  }

  .card-inner.flipped { transform: rotateY(180deg); }

  .card-face {
    position: absolute;
    inset: 0;
    backface-visibility: hidden;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2.5rem;
    box-shadow: 0 4px 40px rgba(0,0,0,0.6), 0 0 0 1px #222;
  }

  .card-front {
    background: #161616;
  }

  .card-back {
    background: #1a1a16;
    transform: rotateY(180deg);
  }

  .card-label {
    position: absolute;
    top: 1rem;
    left: 1.5rem;
    font-size: 0.65rem;
    color: #444;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }

  .card-topic-tag {
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    font-size: 0.65rem;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    border: 1px solid #2a2a2a;
    padding: 0.15rem 0.5rem;
    border-radius: 999px;
  }

  .card-text {
    font-family: 'Fraunces', serif;
    font-size: 1.3rem;
    font-weight: 300;
    text-align: center;
    line-height: 1.5;
    color: #e8e4dc;
  }

  .card-hint {
    position: absolute;
    bottom: 1rem;
    font-size: 0.65rem;
    color: #333;
    letter-spacing: 0.05em;
  }

  .nav {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .nav-btn {
    background: none;
    border: 1px solid #2a2a2a;
    color: #555;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .nav-btn:hover:not(:disabled) { border-color: #e8e4dc; color: #e8e4dc; }
  .nav-btn:disabled { opacity: 0.2; cursor: default; }

  .progress-text {
    font-size: 0.75rem;
    color: #444;
    min-width: 5rem;
    text-align: center;
  }

  .progress-bar-bg {
    width: 560px;
    height: 2px;
    background: #1e1e1e;
    border-radius: 999px;
    overflow: hidden;
  }

  .progress-bar-fill {
    height: 100%;
    background: #e8e4dc;
    border-radius: 999px;
    transition: width 0.3s ease;
  }

  .modal-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    backdrop-filter: blur(4px);
  }

  .modal {
    background: #141414;
    border: 1px solid #2a2a2a;
    border-radius: 16px;
    padding: 2rem;
    width: 440px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .modal-title {
    font-family: 'Fraunces', serif;
    font-weight: 300;
    font-size: 1.1rem;
    color: #e8e4dc;
    margin-bottom: 0.5rem;
  }

  .modal input, .modal select {
    background: #0f0f0f;
    border: 1px solid #2a2a2a;
    color: #e8e4dc;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    width: 100%;
    outline: none;
    transition: border-color 0.2s;
  }
  .modal input:focus, .modal select:focus { border-color: #555; }
  .modal input::placeholder { color: #333; }

  .modal-actions {
    display: flex;
    gap: 0.75rem;
    justify-content: flex-end;
    margin-top: 0.5rem;
  }

  .btn-primary {
    background: #e8e4dc;
    color: #0f0f0f;
    border: none;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    font-weight: 500;
    transition: opacity 0.2s;
  }
  .btn-primary:hover { opacity: 0.85; }

  .btn-ghost {
    background: none;
    color: #555;
    border: 1px solid #2a2a2a;
    padding: 0.5rem 1.2rem;
    border-radius: 8px;
    cursor: pointer;
    font-family: 'DM Mono', monospace;
    font-size: 0.8rem;
    transition: all 0.2s;
  }
  .btn-ghost:hover { color: #888; border-color: #444; }

  .empty-state {
    font-size: 0.8rem;
    color: #333;
    text-align: center;
    padding: 2rem;
  }
`;

type Card = {
    front: string;
    back: string;
    topic: string;
};

const INITIAL_CARDS: Card[] = [
    {
        front: "What is Newton's 1st Law?",
        back: "An object stays still or moves at constant speed unless a force acts on it.",
        topic: "Physics - Forces and Motion",
    },
    {
        front: "What is Newton's 2nd Law?",
        back: "F = ma. A bigger force = more acceleration.",
        topic: "Physics - Forces and Motion",
    },
    {
        front: "What is Newton's 3rd Law?",
        back: "Every action has an equal and opposite reaction.",
        topic: "Physics - Forces and Motion",
    },
    {
        front: "What is an exothermic reaction?",
        back: "A reaction that releases heat energy to the surroundings. ΔH is negative.",
        topic: "Chemistry - Thermodynamics",
    },
    {
        front: "What is an endothermic reaction?",
        back: "A reaction that absorbs heat from the surroundings. ΔH is positive.",
        topic: "Chemistry - Thermodynamics",
    },
    {
        front: "What is the derivative of x²?",
        back: "2x — multiply by the power, reduce the power by 1.",
        topic: "Math - Calculus",
    },
    {
        front: "What does the derivative tell you?",
        back: "The gradient (slope) of a curve at any given point.",
        topic: "Math - Calculus",
    },
];

export default function FlashcardApp() {
    const [cards, setCards] = useState<Card[]>(INITIAL_CARDS);
    const [itr, setItr] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [showAddCard, setShowAddCard] = useState(false);
    const [frontInput, setFrontInput] = useState("");
    const [backInput, setBackInput] = useState("");
    const [topicInput, setTopicInput] = useState("");
    const [activeTopic, setActiveTopic] = useState("All");

    const topics = ["All", ...Array.from(new Set(cards.map((c) => c.topic)))];
    const filtered =
        activeTopic === "All"
            ? cards
            : cards.filter((c) => c.topic === activeTopic);
    const current = filtered[itr];

    const onClickCard = () => setIsFlipped(!isFlipped);

    const onRightArrowClick = () => {
        setItr(Math.min(itr + 1, filtered.length - 1));
        setIsFlipped(false);
    };

    const onLeftArrowClick = () => {
        setItr(Math.max(itr - 1, 0));
        setIsFlipped(false);
    };

    const handleTopicChange = (topic: string) => {
        setActiveTopic(topic);
        setItr(0);
        setIsFlipped(false);
    };

    const addCardFinal = () => {
        if (!frontInput.trim() || !backInput.trim()) return;
        const to_add: Card = {
            front: frontInput.trim(),
            back: backInput.trim(),
            topic: topicInput.trim() || "General",
        };
        setCards([...cards, to_add]);
        setFrontInput("");
        setBackInput("");
        setTopicInput("");
        setShowAddCard(false);
    };

    const progress =
        filtered.length > 0 ? ((itr + 1) * 100) / filtered.length : 0;

    return (
        <>
            <style>{STYLES}</style>
            <div className="app">
                <div className="header">
                    <span className="title">flashcards</span>
                    <button
                        className="add-btn"
                        onClick={() => setShowAddCard(true)}
                    >
                        + add card
                    </button>
                </div>

                <div className="topics">
                    {topics.map((t) => (
                        <button
                            key={t}
                            className={`topic-chip ${activeTopic === t ? "active" : ""}`}
                            onClick={() => handleTopicChange(t)}
                        >
                            {t}
                        </button>
                    ))}
                </div>

                {current ? (
                    <div className="card-scene" onClick={onClickCard}>
                        <div
                            className={`card-inner ${isFlipped ? "flipped" : ""}`}
                        >
                            <div className="card-face card-front">
                                <span className="card-label">front</span>
                                <span className="card-topic-tag">
                                    {current.topic}
                                </span>
                                <p className="card-text">{current.front}</p>
                                <span className="card-hint">click to flip</span>
                            </div>
                            <div className="card-face card-back">
                                <span className="card-label">back</span>
                                <span className="card-topic-tag">
                                    {current.topic}
                                </span>
                                <p className="card-text">{current.back}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="card-scene">
                        <div
                            className="card-face card-front"
                            style={{ position: "relative", borderRadius: 16 }}
                        >
                            <p className="empty-state">
                                no cards for this topic yet
                            </p>
                        </div>
                    </div>
                )}

                <div className="progress-bar-bg">
                    <div
                        className="progress-bar-fill"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                <div className="nav">
                    <button
                        className="nav-btn"
                        onClick={onLeftArrowClick}
                        disabled={itr === 0}
                    >
                        ←
                    </button>
                    <span className="progress-text">
                        {filtered.length > 0
                            ? `${itr + 1} / ${filtered.length}`
                            : "0 / 0"}
                    </span>
                    <button
                        className="nav-btn"
                        onClick={onRightArrowClick}
                        disabled={itr === filtered.length - 1}
                    >
                        →
                    </button>
                </div>
            </div>

            {showAddCard && (
                <div
                    className="modal-overlay"
                    onClick={() => setShowAddCard(false)}
                >
                    <div className="modal" onClick={(e) => e.stopPropagation()}>
                        <p className="modal-title">new card</p>
                        <input
                            value={frontInput}
                            onChange={(e) => setFrontInput(e.target.value)}
                            placeholder="front of card"
                        />
                        <input
                            value={backInput}
                            onChange={(e) => setBackInput(e.target.value)}
                            placeholder="back of card"
                        />
                        <input
                            value={topicInput}
                            onChange={(e) => setTopicInput(e.target.value)}
                            placeholder="topic (e.g. Physics)"
                        />
                        <div className="modal-actions">
                            <button
                                className="btn-ghost"
                                onClick={() => setShowAddCard(false)}
                            >
                                cancel
                            </button>
                            <button
                                className="btn-primary"
                                onClick={addCardFinal}
                            >
                                add
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
