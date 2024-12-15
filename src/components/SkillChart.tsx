import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Skill {
  name: string;
  level: number;
}

interface SkillChartProps {
  skills: Skill[];
}

export const SkillChart: React.FC<SkillChartProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill) => (
        <TooltipProvider key={skill.name}>
          <Tooltip>
            <TooltipTrigger asChild>
              <motion.div
                className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center"
                  initial={{ scale: 0 }}
                  animate={{ scale: skill.level / 100 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <span className="text-white font-bold">{skill.name}</span>
                </motion.div>
              </motion.div>
            </TooltipTrigger>
            <TooltipContent>
              <p>
                {skill.name}: {skill.level}%
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ))}
    </div>
  );
};
