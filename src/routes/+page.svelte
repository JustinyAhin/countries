<script lang="ts">
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	export let data: PageData;

	const REGIONS = [
		{
			slug: 'africa',
			name: 'Africa'
		},
		{
			slug: 'americas',
			name: 'Americas'
		},
		{
			slug: 'asia',
			name: 'Asia'
		},
		{
			slug: 'europe',
			name: 'Europe'
		},
		{
			slug: 'oceania',
			name: 'Oceania'
		}
	];

	let selectedRegion = $page.url.searchParams.get('region') || REGIONS[0].slug;

	const handleRegionChange = () => {
		goto(`?region=${selectedRegion}`);
	};
</script>

<h1>State in URL: the Svelte approach</h1>

<section>
	<div>
		<form>
			<select bind:value={selectedRegion} on:change={handleRegionChange}>
				{#each REGIONS as region, index}
					<option value={region.slug}>{region.name}</option>
				{/each}
			</select>
		</form>
	</div>

	{#if data.countries.length > 0}
		<table>
			<thead>
				<tr>
					<th>Flag</th>
					<th>Name</th>
					<th>Capital</th>
				</tr>
			</thead>
			<tbody>
				{#each data.countries as country}
					<tr>
						<td><img src={country.flags.svg} alt={country.name.official} class="flag" /></td>
						<td>{country.name.official}</td>
						<td>{country.capital}</td>
					</tr>
				{/each}
			</tbody>
		</table>
	{/if}
</section>

<style>
	section > *:not(:first-child) {
		margin-top: 1rem;
	}

	form {
		width: 100%;
	}

	form select {
		padding: 0.5rem;
		width: 40%;
	}

	table {
		max-width: 100%;
		border-collapse: collapse;
	}

	table,
	th,
	td {
		border: 1px solid #ccc;
	}

	th,
	td {
		padding: 0.5rem;
		text-align: left;
	}

	th:first-child,
	td:first-child {
		width: 4rem;
	}

	.flag {
		width: 2rem;
		height: 1.5rem;
	}
</style>
