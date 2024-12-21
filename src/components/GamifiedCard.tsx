"use client";

import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface ProfileCardProps {
  name?: string;
  title?: string;
  tagline?: string;
  stars?: number;
  rizzLevel?: number;
  imageUrl?: string;
  student: any; 
}

export default function GamifiedProfileCard({
  name = "Sarah Thompson",
  title = "Vibe Master",
  tagline = "Living life in debug mode 🚀",
  stars = 4,
  rizzLevel = 85,
  imageUrl = "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Prescription01&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=White&graphicType=Skull&eyeType=WinkWacky&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Brown",
  student
}: //   imageUrl = "https://avatar.iran.liara.run/public",
ProfileCardProps) {
  // Generate array of 5 stars
  const starRating = Array(5)
    .fill(0)
    .map((_, i) => i < stars);

  return (
    <div className="w-full max-w-[422px] mx-auto [background:linear-gradient(45deg,#080b11,theme(colors.slate.800)_50%,#172033)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,_theme(colors.green.500)_86%,_theme(colors.green.300)_90%,_theme(colors.green.500)_94%,_theme(colors.slate.600/.48))_border-box] rounded-2xl border-transparent animate-border border-4">
        {/* <div className="relative text-center z-10 px-0 py-16 rounded-2xl  w-fit bg-[url('https://res.cloudinary.com/dzl9yxixg/image/upload/new-grid_ng16tf.png')]  h-full mx-auto"> */}
        <Card className=" w-full max-w-sm overflow-hidden bg-gradient-to-br from-slate-700 via-purple-100 to-slate-900 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
          <div className="relative h-[40%] min-h-[200px]">
            <div className="absolute inset-0">
              <img src={imageUrl} alt={name} className="w-full h-full" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="p-6 space-y-4">
            <div className="flex flex-col justify-between items-start">
              <div>
                <h2 className="text-2xl font-bold tracking-tight">{student.student.name}</h2>
                <p className="text-sm text-muted-foreground font-medium">
                  {title}
                </p>
              </div>
              <div className="flex gap-0.5">
                {starRating.map((filled, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      filled
                        ? "text-yellow-500 fill-yellow-500"
                        : "text-muted-foreground/25"
                    } transition-colors duration-300`}
                  />
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground font-medium">
                  Rizz Level
                </span>
                <span className="font-bold">{rizzLevel}%</span>
              </div>
              <Progress value={rizzLevel} className="h-2" />
            </div>

            <p className="text-sm text-muted-foreground italic">"{tagline}"</p>

            <div className="pt-2 flex gap-2">
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Level 42
              </div>
              <div className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                Pro Status
              </div>
            </div>
          </div>
        </Card>
        {/* </div> */}
      </div>
  );
}
