# Portfolio Website

A modern, clean portfolio website inspired by the design aesthetic of taimoor.xyz.

## Features

- **Modern Dark Theme**: Sleek dark background with gradient accents
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations and hover effects
- **Organized Sections**: 
  - Header with name and tagline
  - Skills showcase
  - Experience (organized by year)
  - Education
  - Research Papers
  - Projects
  - Speaker Sessions
  - Notable Mentions
  - Travel Stats

## Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize your content**: Edit `index.html` to add your own information:
   - Update your name and tagline in the header section
   - Add your skills in the skills section
   - Fill in your experience, education, projects, etc.
   - Customize colors and styling in `styles.css` if needed

## File Structure

```
myportfoliomaker/
├── index.html      # Main HTML file
├── styles.css      # All styling and design
├── script.js       # Interactive features and animations
└── README.md       # This file
```

## Customization Guide

### Changing Colors

Edit the CSS variables in `styles.css`:

```css
:root {
    --bg-color: #0a0a0a;           /* Background color */
    --text-primary: #ffffff;        /* Main text color */
    --text-secondary: #a0a0a0;      /* Secondary text color */
    --accent-color: #3b82f6;        /* Accent/primary color */
    --border-color: #1f1f1f;        /* Border color */
    --card-bg: #111111;             /* Card background */
}
```

### Adding Experience Items

Use this template in the experience section:

```html
<div class="experience-item">
    <div class="exp-header">
        <span class="exp-icon">AB</span>
        <div class="exp-title-group">
            <h4 class="exp-company">Company Name</h4>
            <span class="exp-status">Present</span>
        </div>
    </div>
    <p class="exp-role">Your Role</p>
    <p class="exp-duration">Jan. 2025 - Present</p>
    <p class="exp-description">Description here.</p>
    <ul class="exp-highlights">
        <li>Highlight 1</li>
        <li>Highlight 2</li>
    </ul>
</div>
```

### Status Badges

Available status classes:
- `exp-status` - Default (Present/Current)
- `exp-status.acquired` - Green badge for acquired companies
- `exp-status.paused` - Yellow badge for paused projects

### Adding Skills

Simply add more skill tags:

```html
<span class="skill-tag">Your Skill</span>
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Feel free to use this template for your own portfolio!

## Credits

Design inspired by [taimoor.xyz](https://taimoor.xyz/index.html)

