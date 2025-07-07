// Import all icons using Vite's import system
import iconReaction from "../assets/images/icon-reaction.svg";
import iconMemory from "../assets/images/icon-memory.svg";
import iconVerbal from "../assets/images/icon-verbal.svg";
import iconVisual from "../assets/images/icon-visual.svg";

interface ItemProps {
  title: string;
  score: number;
  color: string;
}

const Item = ({ title, score, color }: ItemProps) => {
  // Create a background color with opacity by extracting the HSL values
  const getBackgroundColor = (colorVar: string) => {
    // This will create a semi-transparent version of the color
    return `color-mix(in srgb, var(${colorVar}) 10%, transparent)`;
  };

  // Map title names to imported icons
  const iconMap: { [key: string]: string } = {
    Reaction: iconReaction,
    Memory: iconMemory,
    Verbal: iconVerbal,
    Visual: iconVisual
  };

  // Get the correct icon URL based on title
  const iconSrc = iconMap[title] || iconReaction;

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg min-w-full`}
      style={{
        backgroundColor: getBackgroundColor(color)
      }}
    >
      <div className="flex items-center gap-4">
        <img src={iconSrc} alt={`${title} icon`} className="w-4 h-4" />
        <span className={`font-semibold`} style={{ color: `var(${color})` }}>
          {title}
        </span>
      </div>
      <div className="flex items-center gap-1">
        <span
          className={`text-[var(--color-neutral-dark-gray-blue)] font-bold`}
        >
          {score}
        </span>
        <span
          className={`text-[var(--color-neutral-light-lavender)] font-bold`}
        >
          / 100
        </span>
      </div>
    </div>
  );
};

export default Item;
