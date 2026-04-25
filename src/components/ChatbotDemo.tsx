"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import styles from "./ChatbotDemo.module.css";

interface Message {
  type: "user" | "bot";
  text: string;
}

const conversations = [
  [
    { type: "user" as const, text: "Hi! I need help tracking my order #4521" },
    {
      type: "bot" as const,
      text: "Hello! 👋 I found your order. It's currently out for delivery and should arrive by 3 PM today.",
    },
    { type: "user" as const, text: "Can I change the delivery address?" },
    {
      type: "bot" as const,
      text: "Of course! I can update that for you. Please share the new address and I'll make the change right away. 📦",
    },
  ],
  [
    { type: "user" as const, text: "What services do you offer?" },
    {
      type: "bot" as const,
      text: "We offer website development, mobile apps, and AI chatbot solutions! 🚀 What are you interested in?",
    },
    { type: "user" as const, text: "I need a website for my clinic" },
    {
      type: "bot" as const,
      text: "Great choice! We've built 15+ healthcare websites with features like online booking, patient portals, and telehealth. Want me to schedule a free consultation? 🏥",
    },
  ],
  [
    { type: "user" as const, text: "I want to book a table for tonight" },
    {
      type: "bot" as const,
      text: "I'd love to help! 🍽️ How many guests will be dining, and do you have a preferred time?",
    },
    { type: "user" as const, text: "4 people, around 7:30 PM" },
    {
      type: "bot" as const,
      text: "Perfect! I've reserved a table for 4 at 7:30 PM. You'll receive a confirmation email shortly. Enjoy your evening! ✨",
    },
  ],
];

const capabilities = [
  { icon: "💬", label: "24/7 Customer Support" },
  { icon: "🎯", label: "Lead Qualification" },
  { icon: "📅", label: "Appointment Booking" },
  { icon: "🛒", label: "Order Tracking" },
  { icon: "🧠", label: "AI-Powered Responses" },
  { icon: "🌍", label: "Multi-Language" },
  { icon: "📊", label: "Analytics Dashboard" },
  { icon: "🔗", label: "CRM Integration" },
];

export default function ChatbotDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [conversationIndex, setConversationIndex] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<NodeJS.Timeout[]>([]);

  const clearTimeouts = useCallback(() => {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
  }, []);

  const playConversation = useCallback(
    (convIdx: number) => {
      clearTimeouts();
      setMessages([]);
      setIsTyping(false);

      const conv = conversations[convIdx];
      let delay = 800;

      conv.forEach((msg, i) => {
        if (msg.type === "bot") {
          // Show typing indicator before bot message
          const typingTimeout = setTimeout(() => {
            setIsTyping(true);
          }, delay);
          timeoutsRef.current.push(typingTimeout);
          delay += 1200;
        }

        const msgTimeout = setTimeout(() => {
          setIsTyping(false);
          setMessages((prev) => [...prev, msg]);
        }, delay);
        timeoutsRef.current.push(msgTimeout);

        delay += i === conv.length - 1 ? 3000 : 1500;
      });

      // Restart with next conversation
      const restartTimeout = setTimeout(() => {
        const next = (convIdx + 1) % conversations.length;
        setConversationIndex(next);
      }, delay);
      timeoutsRef.current.push(restartTimeout);
    },
    [clearTimeouts]
  );

  useEffect(() => {
    playConversation(conversationIndex);
    return clearTimeouts;
  }, [conversationIndex, playConversation, clearTimeouts]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  return (
    <section className={styles.section} id="chatbots">
      <div className={styles.content}>
        <motion.div
          className={styles.textSide}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label">🤖 Chatbots</span>
          <h2 className={styles.showcaseTitle}>
            AI Chatbots That{" "}
            <span className="gradient-text">Never Sleep</span>
          </h2>
          <p className={styles.showcaseDesc}>
            Intelligent conversational agents that handle customer inquiries,
            book appointments, qualify leads, and drive sales — all powered by
            advanced AI.
          </p>

          <div className={styles.capabilities}>
            {capabilities.map((cap) => (
              <div key={cap.label} className={styles.capability}>
                <span className={styles.capabilityIcon}>{cap.icon}</span>
                {cap.label}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className={styles.chatSide}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.chatWidget}>
            <div className={styles.chatHeader}>
              <div className={styles.chatBotAvatar}>🤖</div>
              <div className={styles.chatBotInfo}>
                <div className={styles.chatBotName}>ByteBot Assistant</div>
                <div className={styles.chatBotStatus}>
                  <span className={styles.chatBotStatusDot} />
                  Online
                </div>
              </div>
            </div>

            <div className={styles.chatMessages}>
              {messages.map((msg, i) => (
                <motion.div
                  key={`${conversationIndex}-${i}`}
                  className={`${styles.message} ${
                    msg.type === "user"
                      ? styles.userMessage
                      : styles.botMessage
                  }`}
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {msg.text}
                </motion.div>
              ))}

              {isTyping && (
                <div className={styles.typing}>
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                  <span className={styles.typingDot} />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            <div className={styles.chatInput}>
              <div className={styles.chatInputField}>Type a message...</div>
              <button className={styles.chatSendBtn} aria-label="Send message">
                ➤
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
