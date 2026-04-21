<script lang="ts">
	import { asset } from '$app/paths';
	const STACK = [
		{
			name: 'Svelte',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/svelte/svelte-original.svg'
		},
		{
			name: 'Vue',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg'
		},
		{
			name: 'React',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
		},
		{
			name: 'Flutter',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg'
		},
		{
			name: 'Golang',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg'
		},
		{
			name: 'Node',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
		},
		{
			name: 'Mongo',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
		},
		{
			name: 'Postgresql',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg'
		},
		{
			name: 'MySQL',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
		},
		{
			name: 'Graphql',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg'
		},
		{
			name: 'Docker',
			icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
		}
	];

	const EXPERIENCE = [
		{
			company: 'VERMILLION TECH SOLUTIONS',
			role: 'Founder & CTO',
			years: 'JAN 2025 - Present, Kampala (UGANDA)',
			location: 'REMOTE - FULLTIME',
			details: [
				'Co-founded and architected a scalable SaaS platform delivering cross-platform applications across web, desktop and mobile, achieving 99.9% uptime.',
				'Established the engineering organization from inception, implementing scalable architecture, CI/CD pipelines, and modern development workflows to accelerate product development.',
				'Led full-stack product development across frontend and backend systems, delivering production-grade features.',
				'Improved backend performance and reliability by optimizing database access patterns and designing scalable data models.'
			]
		},
		{
			company: 'LEARNIO AS',
			role: 'Tech Manager & Sr. Software Engineer',
			years: 'JAN 2025 - MAR 2026, Oslo (NORWAY)',
			location: 'REMOTE - FULLTIME',
			details: [
				'Led full software development lifecycle for an education platform serving global users, providing educational infrastructure to both trainers and students.',
				'Managed cross-functional engineering teams of developers, designers, and QA, increasing sprint delivery predictability by 25% through improved planning and code review processes.',
				'Improved system scalability and performance, reducing deployment errors by 40% by introducing containerized environments using Docker and standardized architecture patterns.',
				'Delivered production-grade features across frontend and backend systems.'
			]
		},
		{
			company: 'MASTER WIZR',
			role: 'Tech Manager & Sr. Software Engineer',
			years: 'APR 2021 - JAN 2025, Oslo (NORWAY)',
			location: 'REMOTE - FULLTIME',
			details: [
				'Designed scalable product architecture for a cloud presentation, video and storage platform, enabling support for thousands of concurrent users byimplementing microservice-based backend systems.',
				'Improved engineering team productivity by 35% by establishing coding standards, CI/CD pipelines, and structured development processes.',
				'Accelerated new engineer onboarding by 50% by implementing mentorship programs, pair programming, and technical documentation.',
				'Delivered full-stack features across multiple product releases, improving platform stability and maintainability through modern frontend and backend frameworks'
			]
		},
		{
			company: 'TWELVE OAKS SOFTWARE',
			role: 'Tech Manager & Sr. Software Engineer',
			years: 'MAY 2023 - JUN 2024, York Shire (UNITED KINGDOM)',
			location: 'REMOTE - PARTTIME',
			details: [
				'Led architecture and feasibility analysis for complex gaming and bespoke software systems, ensuring scalable solutions aligned with business goals.',
				'Improved system performance and stability by 30% by conducting technical audits and implementing architecture improvements across backend services.',
				'Delivered multiple high-impact bespoke projects for enterprise clients by coordinating engineering teams and managing technical delivery timeline',
				'Developed full-stack solutions across cloud-based systems, integrating APIs and scalable backend services.'
			]
		},
		{
			company: 'CODE FIRST GIRLS',
			role: 'Lead Instructor',
			years: 'OCT 2022 - SEP 2023, London (UNITED KINGDOM)',
			location: 'REMOTE - PARTTIME',
			details: [
				'Trained and mentored over 100 students in modern web development, improving course completion rates by 40% through hands-on project-based learning.',
				'Designed production-ready curriculum covering React, JavaScript, and SQL, enabling students to build full-stack applications.',
				'Guided students in building real-world software projects, preparing them for entry-level engineering roles.'
			]
		},
		{
			company: 'ANDELA',
			role: 'Software Engineer',
			years: 'APR 2018 - JUN 2020, New York (USA)',
			location: 'APR 2018 - JUN 2020, New York (USA)',
			details: [
				'Built and maintained client-facing platforms used by global enterprises, contributing to product development across multiple distributed teams.',
				'Delivered scalable mobile and web applications, improving product delivery timelines by 25% through efficient collaboration and code optimization.',
				'Integrated third-party APIs and services, enabling faster product feature development and improved system interoperability.'
			]
		},
		{
			company: 'PREMISE DATA',
			role: 'Software Engineer',
			years: 'NOV 2018 - JUL 2019, San Francisco (USA)',
			location: 'REMOTE - CONTRACT',
			details: [
				'Developed data analytics platform components supporting large-scale data collection and analysis, improving system reliability and data processingefficiency.',
				'Optimized Android mobile application performance, reducing application latency by 20% through code optimization and architectural improvements.',
				'Maintained high software quality standards by implementing testing and bug resolution workflows.'
			]
		},
		{
			company: 'ISBAT UNIVERSITY',
			role: 'Software Consultant',
			years: 'JUN 2019 - DEC 2019, Kampala (UGANDA)',
			location: 'HYBRID - CONTRACT',
			details: [
				'Developed custom university software systems, improving operational efficiency by digitizing institutional workflows.',
				'Improved system reliability by 25% through QA testing and performance optimization.',
				'Delivered technical support and system maintenance, ensuring continuous platform availability.'
			]
		},
		{
			company: 'APTECH COMPUTER EDUCATION',
			role: 'Software Consultant',
			years: 'SEP 2017 - APR 2018, Kampala (UGANDA)',
			location: 'HYBRID - CONTRACT',
			details: [
				'Built secure internal software tools, improving operational workflows and reducing manual administrative tasks.',
				'Improved application reliability through QA testing and performance improvements across existing systems'
			]
		},
		{
			company: 'NEUWELT UGANDA',
			role: 'Software Engineer',
			years: 'JAN 2016 - AUG 2018, Kampala (UGANDA)',
			location: 'ONSITE - FULLTIME',
			details: [
				'Delivered custom client software solutions, improving business workflows and enabling digital transformation for multiple organizations.',
				'Led full development lifecycle for multiple projects, ensuring on-time delivery and high-quality production releases.',
				'Mentored junior developers, improving engineering team capabilities and coding standards.'
			]
		}
	];

	const PROJECTS = [
		{
			image: '/kaspoti.png',
			name: 'Kaspoti',
			description:
				'Discovery platform connecting users to venues, events, and local businesses across Uganda, with real-time listings and booking capabilities.',
			impact:
				'Enabled digital visibility for local businesses and streamlined event discovery, improving user access to venues and increasing engagement for vendors.',
			link: 'https://kaspoti.com',
			tech: ['vue', 'react', 'go', 'graphql', 'flutter', 'dart', 'mongodb']
		},
		{
			image: '/gyz.png',
			name: 'GYZ Entertainment',
			description:
				'Talent management platform for entertainment professionals, supporting portfolio creation, discovery, and client engagement.',
			impact:
				'Empowered artists and industry professionals with centralized profiles and booking workflows, simplifying talent discovery and management.',
			link: 'https://gyzentertainment.com',
			tech: ['vue', 'react', 'express', 'graphql', 'node', 'mongodb']
		},
		{
			image: '/inzpiri.png',
			name: 'Inzpiri',
			description:
				'Online learning platform designed to deliver structured educational content and interactive learning experiences.',
			impact:
				'Improved accessibility to digital learning resources for students and educators, enabling scalable content delivery and engagement.',
			link: 'https://inzpiri.com',
			tech: ['vue', 'react', 'go', 'graphql', 'mongodb']
		},
		{
			image: '/mwizr.png',
			name: 'Mwizr',
			description:
				'Cloud-based platform for storage, presentations, and video delivery, built to support high-scale content usage.',
			impact:
				'Delivered scalable storage and media tools to a global user base, supporting high-volume content access and performance-sensitive workloads.',
			link: 'https://masterwizr.com',
			tech: ['react', 'next', 'go', 'graphql', 'mongodb', 'redis']
		},
		{
			image: '/vermillion.png',
			name: 'Vermillion Tech Solutions',
			description:
				'Technology solutions company delivering custom software and digital media products across multiple industries.',
			impact:
				'Led delivery of tailored software solutions for diverse clients, improving operational efficiency and enabling digital transformation initiatives.',
			link: 'https://vermilliontech.com',
			tech: ['vue', 'react', 'go', 'graphql', 'mongodb']
		}
	];

	let showAll = $state(false);

	const VISIBLE_COUNT = 4;

	let visibleExperience = $derived(showAll ? EXPERIENCE : EXPERIENCE.slice(0, VISIBLE_COUNT));

	let hasMore = $derived(EXPERIENCE.length > VISIBLE_COUNT);
</script>

<!-- INTRO SECTION -->
<section class="my-10 flex flex-col-reverse items-center gap-10 md:flex-row md:justify-between">
	<!-- Text Content -->
	<div class="flex-1 space-y-6">
		<!-- Name -->
		<div class="space-y-2">
			<div class="h-1 w-12 rounded-full bg-linear-to-r from-blue-400 to-sky-600"></div>

			<h1 class="text-4xl font-bold tracking-tight text-slate-100 md:text-5xl">
				Benard Asiimwe Bataringaya
			</h1>
			<p class="text-sm text-slate-500">Founder • Senior Software Engineer • Engineering Leader</p>
		</div>

		<!-- Tagline -->
		<p class="text-lg text-slate-300">
			I <span class="font-medium text-sky-400">architect</span> and scale
			<span class="font-medium text-sky-400">high-impact</span> software systems
		</p>

		<p class="text-sm text-slate-500">
			I specialize in taking products from idea to scalable, production-ready systems.
		</p>

		<!-- Bio -->
		<p class="max-w-xl text-sm leading-relaxed text-slate-400">
			I’m a Founder and Senior Software Engineer with 10+ years building and scaling software
			systems. I’ve led teams across Europe, Africa, and the US, delivering web, mobile, and
			distributed platforms. My focus is on performance, scalability, and thoughtful system design.
		</p>

		<!-- CTA -->
		<div class="flex flex-wrap items-center gap-3 pt-2">
			<a
				href="#contact"
				class="rounded-lg bg-sky-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-sky-500 hover:shadow-md"
			>
				Hire Me (Full-time)
			</a>

			<a
				href="#contact"
				class="rounded-lg border border-slate-600 bg-slate-900/40 px-5 py-2.5 text-sm text-slate-200 transition hover:border-slate-400 hover:bg-slate-800"
			>
				Work With Me (Consulting)
			</a>
		</div>
	</div>

	<!-- Image -->
	<div class="flex flex-1 justify-center md:justify-end">
		<div class="relative">
			<!-- glow -->
			<div class="absolute inset-0 -z-10 scale-110 rounded-full bg-sky-500/20 blur-2xl"></div>

			<img
				class="h-52 w-52 rounded-full object-cover shadow-lg ring-2 ring-slate-700 md:h-60 md:w-60"
				src={asset('/profile.jpg')}
				alt="Benard Asiimwe Bataringaya"
			/>
		</div>
	</div>
</section>

<!-- CASE STUDY SECTION -->
<section class="space-y-5 border-y border-slate-800/60 py-10">
	<!-- Section Header -->
	<div class="space-y-2 text-center">
		<h2 class="text-sm tracking-[0.2em] text-slate-400">TECH STACK</h2>
		<p class="text-xs text-slate-500">Tools and technologies I use to build scalable systems</p>
	</div>

	<!-- Stack Grid -->
	<div class="flex flex-wrap items-center justify-center gap-6">
		{#each STACK as stack (stack.name)}
			<div
				class="group flex items-center justify-center rounded-xl border border-slate-800/50 bg-slate-900/30 p-3 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800/40 hover:shadow-md"
				title={stack.name}
			>
				<img
					class="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-110"
					src={stack.icon}
					alt={stack.name}
				/>
			</div>
		{/each}
	</div>
</section>

<!-- PROCESS SECTION -->
<section class="space-y-6 py-10">
	<!-- Section Header -->
	<div class="space-y-2">
		<div class="flex items-center gap-3">
			<div class="h-1 w-10 rounded-full bg-linear-to-r from-amber-400 to-orange-500"></div>
			<h2 class="text-2xl font-semibold tracking-wide text-slate-100">EXPERIENCE</h2>
		</div>

		<p class="text-sm text-slate-400">
			A summary of my professional journey and impact across roles.
		</p>
	</div>

	<!-- Cards -->
	<div class="space-y-5 transition-all duration-500">
		{#each visibleExperience as experience (experience.company)}
			<div
				class="animate-fade-in group rounded-2xl border border-slate-700/60 bg-slate-900/40 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-500 hover:shadow-lg hover:shadow-slate-900/50"
			>
				<!-- Header -->
				<div class="flex flex-col justify-between gap-4 md:flex-row md:items-start">
					<div class="space-y-1">
						<h3 class="text-lg font-semibold text-slate-100 group-hover:text-white">
							{experience.company}
						</h3>

						<p class="text-sm font-medium text-slate-300">
							{experience.role}
						</p>

						<p class="text-xs text-slate-500">
							{experience.location}
						</p>
					</div>

					<span
						class="shrink-0 rounded-full bg-slate-800/70 px-3 py-1 text-xs font-medium text-amber-200 ring-1 ring-slate-700"
					>
						{experience.years}
					</span>
				</div>

				<div class="my-4"></div>

				<ul class="space-y-3">
					{#each experience.details as detail (detail)}
						<li class="flex items-start gap-3 text-sm text-slate-300">
							<span class="mt-2 h-1 w-1 shrink-0 rounded-full bg-amber-400"></span>
							<span class="leading-relaxed">{detail}</span>
						</li>
					{/each}
				</ul>
			</div>
		{/each}
	</div>
	{#if hasMore}
		<div class="flex justify-center pt-4">
			<button
				onclick={() => (showAll = !showAll)}
				class="group flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-800"
			>
				<span>
					{showAll ? 'Show Less' : 'Show More'}
				</span>

				<span class="transition-transform duration-300 {showAll ? 'rotate-270' : 'rotate-90'}">
					&gt;
				</span>
			</button>
		</div>
	{/if}
</section>

<section class="space-y-10 py-16">
	<!-- Header -->
	<div class="space-y-3">
		<div class="flex items-center gap-3">
			<div class="h-1 w-10 rounded-full bg-linear-to-r from-sky-400 to-blue-600"></div>
			<h2 class="text-2xl font-semibold text-slate-100">Selected Projects</h2>
		</div>

		<p class="max-w-xl text-sm text-slate-400">
			A selection of platforms I’ve built and scaled across different industries, focusing on
			performance, usability, and real-world impact.
		</p>
	</div>

	<!-- Projects Grid -->
	<div class="grid gap-8 md:grid-cols-2">
		{#each PROJECTS as project (project.name)}
			<div
				class="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 transition-all duration-300 hover:-translate-y-1 hover:border-slate-600 hover:shadow-lg"
			>
				<!-- Image -->
				<div class="overflow-hidden">
					<img
						src={asset(project.image)}
						alt={project.name}
						class="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
					/>
				</div>

				<!-- Content -->
				<div class="space-y-4 p-6">
					<!-- Title -->
					<h3 class="text-lg font-semibold text-slate-100">
						{project.name}
					</h3>

					<!-- Description -->
					<p class="text-sm leading-relaxed text-slate-400">
						{project.description}
					</p>

					<!-- Impact -->
					<p class="text-xs text-slate-500">
						{project.impact}
					</p>

					<!-- Tech Stack -->
					<div class="flex flex-wrap gap-2 pt-2">
						{#each project.tech as tech (tech)}
							<span class="rounded-md bg-slate-800 px-2 py-1 text-xs text-slate-300">
								{tech}
							</span>
						{/each}
					</div>

					<!-- Link -->
					<div class="pt-3">
						<a
							href={project.link}
							rel="external"
							target="_blank"
							class="text-sm font-medium text-sky-400 transition hover:text-sky-300 hover:underline"
						>
							View Project →
						</a>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<!-- CONTACT SECTION -->
<section class="space-y-8 py-16 text-center" id="contact">
	<!-- Header -->
	<div class="space-y-3">
		<h2 class="text-2xl font-semibold text-slate-100">Get in Touch</h2>
		<p class="mx-auto max-w-md text-sm text-slate-400">
			Open to opportunities, collaborations, or just a conversation. Feel free to reach out.
		</p>
	</div>

	<!-- Contact Cards -->
	<div class="flex flex-wrap justify-center gap-4">
		<!-- Email -->
		<a
			href="mailto:your@email.com"
			class="group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-3 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800"
		>
			<span class="text-sky-400">✉️</span>
			<span class="group-hover:text-white">benard.asiimwe.bataringaya@gmail.com</span>
		</a>

		<!-- LinkedIn -->
		<a
			href="https://www.linkedin.com/in/benard-asiimwe-bataringaya-4b673672/"
			target="_blank"
			class="group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-3 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800"
		>
			<span class="text-sky-400">💼</span>
			<span class="group-hover:text-white">LinkedIn</span>
		</a>

		<!-- GitHub -->
		<a
			href="https://github.com/King-Benx"
			target="_blank"
			class="group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-3 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800"
		>
			<span class="text-sky-400">💻</span>
			<span class="group-hover:text-white">GitHub</span>
		</a>

		<!-- Phone -->
		<a
			href="tel:+256788920178"
			class="group flex cursor-pointer items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-5 py-3 text-sm text-slate-300 transition hover:-translate-y-1 hover:border-slate-600 hover:bg-slate-800"
		>
			<span class="text-sky-400">📞</span>
			<span class="group-hover:text-white">+256 788 920178</span>
		</a>
	</div>
</section>
