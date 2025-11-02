# Water for All - Resalet Nour Ala Nour Website

A modern, responsive website for Resalet Nour Ala Nour NGO, focused on bringing clean water and humanitarian aid to communities across Egypt.

## Features

- **Modern Design**: Clean, professional design with smooth animations and transitions
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Accessible**: Built with accessibility in mind, including ARIA labels and semantic HTML
- **Interactive Elements**: 
  - Animated statistics counters
  - Project filtering system
  - Newsletter subscription form
  - Contact form with validation
  - Smooth scrolling navigation
  - Mobile-friendly hamburger menu

## Pages

1. **Home Page (index.html)**: 
   - Hero section with call-to-action
   - Current projects showcase
   - About section with statistics
   - Upcoming events
   - Newsletter signup
   - Donate section
   - Get involved section

2. **Projects Page (projects.html)**:
   - All projects with filtering by category
   - Water projects
   - Food aid initiatives
   - Community development programs

3. **Contact Page (contact.html)**:
   - Contact information
   - Contact form with subject categories
   - Office hours and location

## File Structure

```
├── index.html          # Home page
├── projects.html       # All projects page
├── contact.html        # Contact page
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   ├── main.js        # Main JavaScript functionality
│   └── projects.js    # Projects page filtering
└── README.md          # This file
```

## Setup Instructions

1. **Clone or Download**: Download all files maintaining the folder structure

2. **Open in Browser**: Simply open `index.html` in your web browser. No build process required!

3. **Local Server (Recommended)**: For best results, use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (if you have http-server installed)
   npx http-server
   
   # Using PHP
   php -S localhost:8000
   ```
   Then navigate to `http://localhost:8000`

## Customization

### Colors
Edit the CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00b3b3;
    --accent-color: #ff6b6b;
    /* ... */
}
```

### Content
- Update text content directly in HTML files
- Replace placeholder images with actual project photos
- Update contact information in the footer and contact page

### Fonts
The website uses Google Fonts (Poppins and Playfair Display). To change fonts, update the font links in the `<head>` section of HTML files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and animations
- **JavaScript**: Vanilla JS (no dependencies)
- **Font Awesome**: Icons
- **Google Fonts**: Typography

## Features Breakdown

### Navigation
- Fixed header with scroll effect
- Mobile-responsive hamburger menu
- Active page highlighting
- Smooth scroll to sections

### Animations
- Fade-in animations on scroll
- Counter animations for statistics
- Hover effects on cards and buttons
- Smooth transitions throughout

### Forms
- Newsletter subscription with email validation
- Contact form with multiple subject options
- Donation amount selection
- Form validation and success messages

### Projects
- Filter by category (All, Water, Food, Community)
- Hover effects with overlay
- Project metadata display
- Responsive grid layout

## Performance Considerations

- Optimized images (using Unsplash placeholder URLs - replace with optimized images)
- Minimal JavaScript (no heavy frameworks)
- CSS animations (hardware-accelerated)
- Lazy loading ready (can be added for images)

## Future Enhancements

Consider adding:
- Backend integration for forms
- Image optimization and lazy loading
- Blog/news section
- Multi-language support
- Payment gateway integration for donations
- Admin dashboard for content management

## License

This website is created for Resalet Nour Ala Nour NGO.

## Contact

For questions or support regarding this website, please contact:
- Email: info@rn3n.org
- Instagram: [@r.nouralanour](https://www.instagram.com/r.nouralanour/)

---

**Note**: Replace placeholder images and contact information with actual content before deployment.

