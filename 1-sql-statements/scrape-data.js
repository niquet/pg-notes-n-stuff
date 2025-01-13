clear();

// Select city names
const citySelectorResult = document.querySelectorAll('.static-row-numbers > tbody:nth-child(2) > tr > th > a');
const cities = Array.from(citySelectorResult).map(city => 
    city.getAttribute('title').replace(/'/g, "''").trim() // Escape single quotes
);

// Select countries
const countrySelectorResult = document.querySelectorAll('.static-row-numbers > tbody:nth-child(2) > tr > td:nth-child(2) > a:nth-child(2)');
const countries = Array.from(countrySelectorResult).map(country => 
    country.getAttribute('title').replace(/'/g, "''").trim() // Escape single quotes
);

// Select populations and clean data
const populationSelectorResult = document.querySelectorAll('.static-row-numbers > tbody:nth-child(2) > tr > td:nth-child(11)');
const populations = Array.from(populationSelectorResult).map(population => 
    population.innerText
        .replace(/,/g, '') // Remove commas
        .replace(/\[\d+\]/g, '') // Remove bracketed numbers
        .replace(/—/g, 'NULL') // Replace em dash with NULL
        .replace(/[M|C]SA:\s/g, '') // Remove 'MSA: ' or 'CSA: '
        .replace(/;\s*\d+/g, '') // Remove second number after a semicolon
        .trim()
);

// Select areas and clean data
const areaSelectorResult = document.querySelectorAll('.static-row-numbers > tbody:nth-child(2) > tr > td:nth-child(12)');
const areas = Array.from(areaSelectorResult).map(area => 
    area.innerText
        .replace(/,/g, '') // Remove commas
        .replace(/—/g, 'NULL') // Replace em dash with NULL
        .replace(/[M|C]SA:\s/g, '') // Remove 'MSA: ' or 'CSA: '
        .replace(/;\s*\d+/g, '') // Remove second number after a semicolon
        .trim()
);

// Prepare values for SQL query
const n = cities.length;
const strings = [];

for (let i = 0; i < n; i++) {
    strings.push(`('${cities[i]}', '${countries[i]}', ${populations[i]}, ${areas[i]})`);
}

// Join values for the SQL query
const values = strings.join(",\n");
const query = `INSERT INTO cities (name, country, population, area)
VALUES ${values};`;

// Copy the generated SQL query to clipboard
copy(query);
