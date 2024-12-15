import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;

const BackgroundGradient = () => {
  return (
    <>
      {/* Animated gradient background */}
      <div className="fixed inset-0 -z-50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#3a8bff,#b73fff)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#00ff8c,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,#ff3d00,transparent_50%)] animate-pulse delay-75" />
      </div>

      {/* Grid overlay */}
      <div className="fixed inset-0 -z-40 bg-[linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]" />

      {/* Noise texture */}
      <div className="fixed inset-0 -z-30 opacity-30 mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('/noise.svg')] animate-noise" />
      </div>

      {/* Glass overlay */}
      <div className="fixed inset-0 -z-20 backdrop-blur-[100px]" />
    </>
  );
};

export default function Page() {
  return (
    <main className="relative flex flex-col min-h-[100dvh] space-y-10">
      <BackgroundGradient />

      {/* Content with glass effect */}
      <div className="relative z-10">
        <div className="mx-auto max-w-7xl backdrop-blur-sm bg-background/50 rounded-2xl shadow-2xl border border-white/10 p-8">
          <section id="hero">
            <div className="mx-auto w-full max-w-2xl space-y-8">
              <div className="gap-2 flex justify-between">
                <div className="flex-col flex flex-1 space-y-1.5">
                  <BlurFadeText
                    delay={BLUR_FADE_DELAY}
                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
                    yOffset={8}
                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                  />
                  <BlurFadeText
                    className="max-w-[600px] md:text-xl"
                    delay={BLUR_FADE_DELAY}
                    text={DATA.description}
                  />
                </div>
                <BlurFade delay={BLUR_FADE_DELAY}>
                  <Avatar className="size-28 border ring-2 ring-purple-500/20 ring-offset-2 ring-offset-background">
                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                  </Avatar>
                </BlurFade>
              </div>
            </div>
          </section>

          <section id="about" className="mt-16">
            <BlurFade delay={BLUR_FADE_DELAY * 3}>
              <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                About
              </h2>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 4}>
              <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                {DATA.summary}
              </Markdown>
            </BlurFade>
          </section>

          <section id="work" className="mt-16">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Work Experience
                </h2>
              </BlurFade>
              {DATA.work.map((work, id) => (
                <BlurFade
                  key={work.company}
                  delay={BLUR_FADE_DELAY * 6 + id * 0.05}
                >
                  <div className="group hover:scale-[1.02] transition-all duration-300">
                    <ResumeCard
                      key={work.company}
                      logoUrl={work.logoUrl}
                      altText={work.company}
                      title={work.company}
                      subtitle={work.title}
                      href={work.href}
                      badges={work.badges}
                      period={`${work.start} - ${work.end ?? "Present"}`}
                      description={work.description}
                    />
                  </div>
                </BlurFade>
              ))}
            </div>
          </section>

          <section id="education" className="mt-16">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 7}>
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Education
                </h2>
              </BlurFade>
              {DATA.education.map((education, id) => (
                <BlurFade
                  key={education.school}
                  delay={BLUR_FADE_DELAY * 8 + id * 0.05}
                >
                  <div className="group hover:scale-[1.02] transition-all duration-300">
                    <ResumeCard
                      key={education.school}
                      href={education.href}
                      logoUrl={education.logoUrl}
                      altText={education.school}
                      title={education.school}
                      subtitle={education.degree}
                      period={`${education.start} - ${education.end}`}
                    />
                  </div>
                </BlurFade>
              ))}
            </div>
          </section>

          <section id="skills" className="mt-16">
            <div className="flex min-h-0 flex-col gap-y-3">
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  Skills
                </h2>
              </BlurFade>
              <div className="flex flex-wrap gap-1">
                {DATA.skills.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge
                      key={skill}
                      className="hover:scale-110 transition-transform"
                    >
                      {skill}
                    </Badge>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          <section id="projects" className="mt-16">
            <div className="space-y-12 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm">
                      My Projects
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      Check out my latest work
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      I&apos;ve worked on a variety of projects, from simple
                      websites to complex web applications. Here are a few of my
                      favorites.
                    </p>
                  </div>
                </div>
              </BlurFade>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
                {DATA.projects.map((project, id) => (
                  <BlurFade
                    key={project.title}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <div className="group hover:scale-[1.02] transition-all duration-300">
                      <ProjectCard
                        href={project.href}
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        dates={project.dates}
                        tags={project.technologies}
                        // image={project.image}
                        // video={project.video}
                        links={project.links}
                      />
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </section>

          <section id="hackathons" className="mt-16">
            <div className="space-y-12 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 13}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                  <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm">
                      Hackathons
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                      I like building things
                    </h2>
                    <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                      During my time in university, I attended{" "}
                      {DATA.hackathons.length}+ hackathons. People from around
                      the country would come together and build incredible
                      things in 2-3 days. It was eye-opening to see the endless
                      possibilities brought to life by a group of motivated and
                      passionate individuals.
                    </p>
                  </div>
                </div>
              </BlurFade>
              <BlurFade delay={BLUR_FADE_DELAY * 14}>
                <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                  {DATA.hackathons.map((project, id) => (
                    <BlurFade
                      key={project.title + project.dates}
                      delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                    >
                      <div className="group hover:scale-[1.02] transition-all duration-300">
                        <HackathonCard
                          title={project.title}
                          description={project.description}
                          location={project.location}
                          dates={project.dates}
                          image={project.image}
                          links={project.links}
                        />
                      </div>
                    </BlurFade>
                  ))}
                </ul>
              </BlurFade>
            </div>
          </section>

          <section id="contact" className="mt-16">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
              <BlurFade delay={BLUR_FADE_DELAY * 16}>
                <div className="space-y-3">
                  <div className="inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 text-sm">
                    Contact
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    Get in Touch
                  </h2>
                  <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Want to chat? Just shoot me a dm{" "}
                    <Link
                      href={DATA.contact.social.X.url}
                      className="text-blue-500 hover:underline"
                    >
                      with a direct question on instagram
                    </Link>{" "}
                    and I&apos;ll respond whenever I can. I will ignore all
                    soliciting.
                  </p>
                </div>
              </BlurFade>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
