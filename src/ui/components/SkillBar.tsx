import styled from "styled-components";
import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  index?: number;
}

const BarWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const BarLabel = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  span:first-child {
    font-weight: 600;
    color: var(--color-text);
    font-size: 0.92rem;
  }

  span:last-child {
    font-family: var(--font-mono);
    font-size: 0.78rem;
    color: var(--color-textMuted);
  }
`;

const Track = styled.div`
  height: 8px;
  border-radius: 9999px;
  background: var(--color-bgAlt);
  border: 1px solid var(--color-border);
  overflow: hidden;
`;

const Fill = styled(motion.div)`
  height: 100%;
  border-radius: 9999px;
  background: var(--gradient-accent);
`;

export function SkillBar({ name, level, index = 0 }: SkillBarProps) {
  return (
    <BarWrap>
      <BarLabel>
        <span>{name}</span>
        <span>{level}%</span>
      </BarLabel>
      <Track role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
        <Fill
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.9, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
        />
      </Track>
    </BarWrap>
  );
}
