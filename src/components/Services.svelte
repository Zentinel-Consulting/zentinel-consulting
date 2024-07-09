<script lang="ts">

	import Accordion from './Accordion.svelte';

	let services: { title: string; points: string[] }[] = [
		{
			title: 'Web development',
			points: [
				'Svelte',
				'React',
				'Responsive design',
				'Node.js',
				'TypeScript',
				'SEO optimization',
				'E-commerce',
				'Web applications',
				'UI/UX design',
				'Prototyping',
				'User testing',
			],
		},
		{
			title: 'Mobile development',
			points: ['iOS', 'Android', 'React Native', 'Swift', 'Kotlin', 'Mobile applications'],
		},
		{
			title: 'AI solutions',
			points: [
				'Machine learning',
				'Deep learning',
				'Computer vision',
				'Natural language processing',
				'Chatbots',
				'Data visualization/analysis',
			],
		},
		{
			title: 'CRM systems',
			points: [
				'Customer data management',
				'Sales automation',
				'Marketing automation',
				'Customer service and support',
				'Analytics and reporting',
				'Integration with other systems',
				'Customizable workflows'
			],
		},
		{
			title: 'POS systems',
			points: [
				'Sales processing and management',
				'Inventory management',
				'Customer management',
				'Reports and analytics',
				'Multi-store management',
				'Employee management',
				'Integration with payment gateways and other systems',
			],
		},
		{
			title: 'Game development',
			points: [
				'Unity',
				'Unreal Engine',
				'2D games',
				'3D games',
				'Multiplayer games',
				'VR games',
				'AR games',
			],
		}
	];

	let selectedAccordion: number = -1;

	function toggleAccordion(index: number) {
		if (selectedAccordion === index) {
			selectedAccordion = -1;
		} else {
			selectedAccordion = index;
		}
	}
	
</script>

<div class="services-container">
	<div class="left-content">
		<div class="text-title">
			<span>
				We aim to build <span class="highlight-1"> innovative </span> and
				<span class="highlight-2"> powerful </span> solutions
			</span>
		</div>
		<div class="start-button">
			<button> Start a project &rarr; </button>
		</div>
	</div>

	<div class="right-content">
		{#each services as service, index}
			<Accordion
				title={service.title}
				points={service.points}
				isOpen={selectedAccordion === index}
				toggleAccordion={() => toggleAccordion(index)}
			/>
		{/each}
	</div>
</div>

<style>
	.services-container {
		display: flex;
		justify-content: space-between;
		align-items: stretch;
		width: 100%;
		height: 100%;
		background-color: #f5f5f5;
		border-radius: 2rem;
	}

	.left-content {
		top: 0;
		width: 30%;
		border-top-left-radius: 2rem;
		border-bottom-left-radius: 2rem;
		background-color: white;
		display: flex;
		flex-direction: column;
		justify-content: center;
		height: auto;
	}

	.text-title {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 70%;
		color: black;
		font-size: 2rem;
		margin: auto;
	}

	.highlight-1 {
		color: #ff00ff;
	}

	.highlight-2 {
		color: #00ff00;
	}

	.start-button {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		padding-bottom: 2.5rem;
	}

	.start-button button {
		background-color: transparent;
		border-width: 2px;
		border-style: solid;
		border-color: black;
		border-radius: 10rem;
		padding: 1rem 2rem;
		cursor: pointer;
		color: black;
		font-size: 1.2rem;
		position: relative;
		overflow: hidden;
		transition: color 0.3s;
		z-index: 1;
	}

	.start-button button::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 0;
		height: 100%;
		background-color: black;
		transition: width 0.3s;
		z-index: -1;
	}

	.start-button button:hover {
		color: white;
	}

	.start-button button:hover::before {
		width: 100%;
	}

	.right-content {
		width: 70%;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-bottom: 1rem;
		margin-top: 2rem;
	}

	.right-content::-webkit-scrollbar {
		display: none;
	}

	
	@media (max-width: 768px) {
		.services-container {
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
		}

		.left-content {
			width: 100%;
			height: 30%;
		}

		.text-title {
			width: 70%;
			height: 30%;
			font-size: 1.5rem;
			margin-top: 5rem;
		}

		.start-button {
			height: 20%;
		}

		.start-button button {
			padding: 0.8rem 1.8rem;
			font-size: 1.2rem;
			margin-top: 2rem;
			margin-bottom: 1rem;
		}

		.right-content {
			padding-top: 1rem;
			width: 100%;
			height: 100%;
		}

		.right-content::-webkit-scrollbar {
			display: block;
		}
	}
</style>
