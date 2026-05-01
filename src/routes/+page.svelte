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
				'Co-founded and scaled a software consultancy delivering EMR, lifestyle, and custom business platforms across web and mobile applications.',
				'Led system architecture, backend engineering, and infrastructure strategy across multiple concurrent client projects.',
				'Designed and implemented cloud infrastructure and CI/CD pipelines, reducing deployment times by over 60% and enabling faster release cycles.',
				'Delivered and maintained production applications with 99.9% uptime across distributed environments.'
			]
		},
		{
			company: 'LEARNIO AS',
			role: 'Tech Manager & Sr. Software Engineer',
			years: 'JAN 2025 - MAR 2026, Oslo (NORWAY)',
			location: 'REMOTE - FULLTIME',
			details: [
				'Led backend architecture and engineering direction for a distributed education platform operating across multiple countries.',
				'Managed and coordinated cross-functional teams of up to 12 engineers, improving delivery predictability and team efficiency.',
				'Built high-performance backend systems in Go and GraphQL with strong reliability and zero reported production downtime during tenure.',
				'Introduced Docker-based workflows and standardized engineering practices, reducing deployment-related issues by 50%.'
			]
		},
		{
			company: 'MASTER WIZR',
			role: 'Tech Manager & Sr. Software Engineer',
			years: 'APR 2021 - JAN 2025, Oslo (NORWAY)',
			location: 'REMOTE - FULLTIME',
			details: [
				'Led engineering delivery across 4 cross-functional teams of 6–8 engineers building video, storage, HR, chat, and presentation platforms.',
				'Drove migration from legacy systems to scalable, secure cloud-based architectures, significantly improving platform stability and reliability.',
				'Established CI/CD pipelines, engineering standards, and structured release processes, improving delivery consistency and reducing operational overhead.',
				'Partnered with leadership on technical hiring, mentorship, and scaling engineering operations across multiple product teams.'
			]
		},
		{
			company: 'TWELVE OAKS SOFTWARE',
			role: 'Tech Manager & Sr. Software Engineer',
			years: 'MAY 2023 - JUN 2024, York Shire (UNITED KINGDOM)',
			location: 'REMOTE - PARTTIME',
			details: [
				'Led architecture and technical delivery for gaming and bespoke enterprise systems, including Dungeon & Dragons-related platforms.',
				'Owned system architecture, technical documentation, and engineering oversight for a distributed team of 5 engineers.',
				'Improved backend scalability and platform stability through infrastructure modernization and targeted technical audits.'
			]
		},
		{
			company: 'CODE FIRST GIRLS',
			role: 'Lead Instructor',
			years: 'OCT 2022 - SEP 2023, London (UNITED KINGDOM)',
			location: 'REMOTE - PARTTIME',
			details: [
				'Mentored and trained 100+ students in modern web development, software engineering principles, and project delivery.',
				'Delivered structured technical workshops covering frontend development, databases, APIs, and engineering best practices.'
			]
		},
		{
			company: 'ANDELA',
			role: 'Software Engineer',
			years: 'APR 2018 - JUN 2020, New York (USA)',
			location: 'APR 2018 - JUN 2020, New York (USA)',
			details: [
				'Worked with international clients including Premise Data and Medable Inc., contributing to data collection and clinical trial platforms.',
				'Developed scalable Android and mobile-first applications for distributed engineering teams and enterprise clients.',
				'Contributed to internal engineering tools while mentoring junior engineers and facilitating technical bootcamps.'
			]
		},
		{
			company: 'PREMISE DATA',
			role: 'Software Engineer',
			years: 'NOV 2018 - JUL 2019, San Francisco (USA)',
			location: 'REMOTE - CONTRACT',
			details: [
				'Developed analytics platform components supporting large-scale global data collection operations.',
				'Improved Android application performance and reliability for field data collection workflows.',
				'Collaborated with distributed engineering teams to deliver scalable mobile and backend solutions.'
			]
		},
		{
			company: 'Earlier Consulting & Engineering Experience ',
			role: 'Software Consultant',
			years: 'JAN 2016 - DEC 2019, Kampala (UGANDA)',
			location: 'HYBRID - CONTRACT',
			details: [
				'Delivered software platforms, automation tools, and internal systems for education and business clients.',
				'Built and maintained web applications, backend systems, and databases across multiple client engagements.'
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
			<p class="text-sm text-slate-500">Founder • Senior Software Engineer • Engineering Manager</p>
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
			Engineering Manager and Senior Software Engineer with 10+ years of experience building and
			scaling distributed web, mobile, and cloud platforms. Proven track record leading
			cross-functional teams (5–30+ engineers), architecting production systems, and improving
			system reliability, deployment speed, and engineering productivity across startups and
			international companies.
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
