import {
  MessagesSquare,
  LayoutGrid,
  Fingerprint,
  PenTool,
  Facebook,
  Target,
  Music2,
  Search,
  Camera,
  Video,
  Layers,
  PenLine,
  Image as ImageIcon,
  FileImage,
  GalleryHorizontal,
  Package,
  type LucideIcon,
} from "lucide-react";

export const iconRegistry: Record<string, LucideIcon> = {
  MessagesSquare,
  LayoutGrid,
  Fingerprint,
  PenTool,
  Facebook,
  Target,
  Music2,
  Search,
  Camera,
  Video,
  Layers,
  PenLine,
  Image: ImageIcon,
  FileImage,
  GalleryHorizontal,
  Package,
};

export function getIcon(name: string): LucideIcon {
  return iconRegistry[name] ?? Package;
}
