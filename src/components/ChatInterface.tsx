import { useState, useRef, useEffect } from "react";
import { Send, User, Bot, Loader2 } from "lucide-react";
import { askMuseumGuide } from "../services/openaiService";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

interface Message {
  role: 'user' | 'bot';
  content: string;
}

interface Props {
  contextId?: string;
  initialMessage?: string;
}

export default function ChatInterface({ contextId, initialMessage }: Props) {
  const { language } = useLanguage();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (initialMessage && messages.length === 0) {
      setMessages([{ role: 'bot', content: initialMessage }]);
    } else if (messages.length === 0) {
      setMessages([{ 
        role: 'bot', 
        content: language === 'ru' 
          ? "Приветствую. Я — гид по нашему архиву. Чем я могу помочь в вашем путешествии по нашему музею?" 
          : "Greetings. I am the museum guide. How can I assist you in your journey through our archives?" 
      }]);
    }
  }, [initialMessage, language]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askMuseumGuide(userMsg, contextId, language);
    setMessages(prev => [...prev, { role: 'bot', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col h-[500px] bg-paper/50 border border-white/5 rounded-2xl overflow-hidden backdrop-blur-xl">
      <div className="p-4 bg-paper border-b border-white/5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center">
          <Bot size={16} className="text-gold" />
        </div>
        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest">{language === 'ru' ? 'ИИ Куратор Архива' : 'AI Archive Curator'}</h4>
          <span className="text-[10px] text-green-500 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            {language === 'ru' ? 'В сети' : 'Online'}
          </span>
        </div>
      </div>

      <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 space-y-4 scrollbar-hide">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] p-4 rounded-2xl text-sm ${
                msg.role === 'user' 
                  ? 'bg-accent text-white rounded-tr-none' 
                  : 'bg-white/5 border border-white/10 rounded-tl-none text-gray-300'
              }`}>
                {msg.content}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white/5 border border-white/10 p-4 rounded-2xl rounded-tl-none">
              <Loader2 size={16} className="animate-spin text-muted" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-paper/80 border-t border-white/5 flex gap-2">
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={language === 'ru' ? 'Задать вопрос...' : 'Ask a question...'}
          className="flex-grow bg-white/5 border border-white/10 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-gold/50 transition-colors"
        />
        <button 
          onClick={handleSend}
          disabled={isLoading}
          className="w-10 h-10 rounded-xl bg-gold text-bg flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  );
}
