import {
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiPython,
  SiTensorflow,
  SiPytorch,
  SiNodedotjs,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiGit,
  SiRust,
  SiCplusplus,
  SiKubernetes,
  SiApachespark,
  SiCmake,
} from "react-icons/si"
import { Database, Brain, Settings } from "lucide-react"

import type { JSX } from "react"

type TechIconProps = {
  name: string
  className?: string
  size?: number
}

export default function TechIcon({ name, className = "", size = 20 }: TechIconProps) {
  const iconMap: Record<string, JSX.Element> = {
    JavaScript: <SiJavascript size={size} className="text-yellow-400" />,
    React: <SiReact size={size} className="text-cyan-400" />,
    "Next.js": <SiNextdotjs size={size} className="text-white" />,
    Python: <SiPython size={size} className="text-blue-500" />,
    TensorFlow: <SiTensorflow size={size} className="text-orange-500" />,
    PyTorch: <SiPytorch size={size} className="text-red-500" />,
    "Node.js": <SiNodedotjs size={size} className="text-green-500" />,
    PostgreSQL: <SiPostgresql size={size} className="text-blue-400" />,
    MySQL: <SiMysql size={size} className="text-blue-600" />,
    Docker: <SiDocker size={size} className="text-blue-400" />,
    Git: <SiGit size={size} className="text-red-400" />,
    Rust: <SiRust size={size} className="text-orange-600" />,
    "C++": <SiCplusplus size={size} className="text-blue-500" />,
    Kubernetes: <SiKubernetes size={size} className="text-blue-400" />,
    MATLAB: <Settings size={size} className="text-orange-500" />,
    Spark: <SiApachespark size={size} className="text-orange-400" />,
    "Hugging Face": <Brain size={size} className="text-yellow-400" />,
    MLflow: <Database size={size} className="text-blue-500" />,
    CMake: <SiCmake size={size} className="text-green-500" />,
  }

  return (
    <div className={`flex items-center justify-center ${className}`}>
      {iconMap[name] || <div className="w-5 h-5" />}
    </div>
  )
}
