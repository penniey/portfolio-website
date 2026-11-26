import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import vm from 'node:vm';

const html = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const css = await readFile(new URL('../styles.css', import.meta.url), 'utf8');
const script = await readFile(new URL('../script.js', import.meta.url), 'utf8');
const context = {};
vm.runInNewContext(`${script.split('document.addEventListener(')[0]}\nglobalThis.projects = projectsData; globalThis.skills = skillsData;`, context);

test('page has an accurate title, description and canonical URL', () => {
    assert.match(html, /<title>Hugo Lundell — Full-Stack & Game Developer<\/title>/);
    assert.match(html, /<meta name="description" content="[^"]+">/);
    assert.match(html, /<link rel="canonical" href="https:\/\/penniey\.com\/">/);
});

test('portfolio data retains all nine projects and 29 skills', () => {
    assert.equal(context.projects.length, 9);
    assert.equal(context.skills.length, 29);
    assert.deepEqual([...context.projects].sort((a, b) => a.id - b.id).slice(0, 3).map((project) => project.title), ['Rift Thresholds', 'Glorious Golf', 'ECS Navigation & Attack']);
    assert.equal(new Set(context.projects.map((project) => project.id)).size, 9);
});

test('project links are real HTTPS destinations and private code is not linked', () => {
    const links = context.projects.flatMap((project) => project.links);
    const publicLinks = links.filter((link) => link.type !== 'private');
    assert.equal(publicLinks.length, 8);
    publicLinks.forEach((link) => assert.ok(link.url.startsWith('https://'), `${link.url} should use HTTPS`));
    assert.equal(links.filter((link) => link.type === 'private').length, 1);
    assert.match(script, /if \(link\.type === 'private'\)/);
    assert.doesNotMatch(script, /Firefox Add-ons/);
});

test('compact skills wrap naturally and filters remove nonmatching entries', () => {
    assert.match(css, /\.skills-grid\s*\{\s*display: grid;\s*grid-template-columns: repeat\(auto-fill, minmax\(160px, 1fr\)\);/);
    assert.match(css, /@media \(max-width: 640px\)[\s\S]*?\.skills-grid\s*\{\s*display: flex;\s*flex-wrap: wrap;/);
    assert.doesNotMatch(css, /\.skills-grid\s*\{[^}]*overflow-y: scroll;/);
    assert.doesNotMatch(css, /\.experience-card\s*\{[^}]*min-height: 300px;/);
    assert.match(css, /\.skill-item\.hidden\s*\{\s*display: none;\s*\}/);
    assert.doesNotMatch(css, /grid-template-rows:\s*repeat\(4, 1fr\)/);
    assert.match(script, /item\.classList\.toggle\('hidden', !isVisible\)/);
    assert.doesNotMatch(script, /setTimeout\(\(\) => \{\s*item\.classList\.add\('hidden'\)/);
});

test('selected filter state is accessible', () => {
    assert.match(html, /aria-label="Filter skills"/);
    assert.match(html, /data-filter="all" aria-pressed="true"/);
    assert.match(html, /aria-live="polite"/);
    assert.match(script, /btn\.setAttribute\('aria-pressed', String\(isActive\)\)/);
});

test('skills grid keeps a constant height so filtering does not shift the page', () => {
    assert.match(script, /function updateSkillsHeight\(\)/);
    assert.match(script, /grid\.style\.minHeight = `\$\{fullHeight\}px`/);
    assert.match(css, /\.skills-grid\s*\{[^}]*align-content: start;/);
    assert.match(css, /\.experience-card\s*\{[^}]*flex: 1;/);
});

test('connection cards share a minimum height and equivalent content', () => {
    assert.match(css, /\.link-card\s*\{[^}]*min-height: 76px;/);
    assert.match(html, /<span class="link-name">Resume<\/span>\s*<span class="link-handle">PDF document<\/span>/);
});

test('known content errors stay fixed', () => {
    assert.doesNotMatch(html, /optimzation/i);
    assert.match(html, /<span class="stat-value">9<\/span>/);
    assert.match(script, /database of 1,000 exercises/);
    assert.match(script, /title: 'Portfolio Website'/);
    assert.doesNotMatch(script, /React, TypeScript/);
});

test('Rift Thresholds is presented as a live web project', () => {
    const project = context.projects.find((item) => item.title === 'Rift Thresholds');
    assert.ok(project);
    assert.equal(project.status, 'live');
    assert.equal(project.links.length, 1);
    assert.equal(project.links[0].type, 'live');
    assert.equal(project.links[0].url, 'https://rift.penniey.com/');
    assert.equal(project.links[0].label, 'Live Site');
    assert.match(html, /<span class="project-count">9 Total<\/span>/);
});

test('experience and résumé reflect the current full-stack and data work', async () => {
    assert.match(script, /warehouse ingestion and analytics workflows/);
    assert.match(script, /AWS\/Terraform and GitHub Actions delivery/);
    assert.ok(context.skills.some((skill) => skill.name === 'PostgreSQL'));
    assert.ok(context.skills.some((skill) => skill.name === 'Terraform'));

    const resume = await readFile(new URL('../Resume.html', import.meta.url), 'utf8');
    assert.match(resume, /Full-Stack Developer/);
    assert.match(resume, /May 2026/);
    assert.match(resume, /Django\/DRF/);
    assert.match(resume, /Next\.js\/React/);
    assert.match(resume, /Rift Thresholds/);
    assert.match(resume, /\.entry-head h3/);
});

test('local production assets are present and valid', async () => {
    const pdf = await readFile(new URL('../Resume.pdf', import.meta.url));
    const icon = await readFile(new URL('../P.png', import.meta.url));
    assert.equal(pdf.subarray(0, 5).toString(), '%PDF-');
    assert.equal(icon.subarray(1, 4).toString(), 'PNG');
});
