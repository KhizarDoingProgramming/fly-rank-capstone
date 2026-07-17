# Sitemap Pressure Test: Prompt & Critique

This document records the sitemap pressure-testing process carried out with Claude, aligning with the **Draw the Path: Portfolio Sitemap + Toolkit** assignment.

---

## 1. The Pressure-Test Prompt

The following prompt was executed in Claude to critically evaluate the sitemap structure against the target audience, core claim, and desired single action:

```text
Act as a critical reviewer and hiring manager. Pressure-test my portfolio sitemap. 

My target audience is a lead tech recruiter/hiring manager at an elite software agency.
My core claim is: "I build high-fidelity, premium AI-assisted frontend web applications that deliver elite user experiences."
The one action I want them to take is: to click "View My Case Studies", review my work, and book a call via Calendly.

My proposed sitemap is:
1. Landing Page (Hero, Core Claim, Quick Intro, Call to Action)
2. Case Studies / Work Page (Details of 3 premium projects with performance metrics)
3. About Me Page (Bio, tech stack, and AI fluency credentials)
4. Contact Page (Inquiry form, calendar scheduler, and social links)

Evaluate this sitemap. Does it directly lead the user to the one action? Is there any page or content that is redundant? What changes should I make to increase conversion?
```

---

## 2. Claude's Critique & Output

Below is the critique received from the model:

### Reviewer Critique
> **Recruiter Profile Review**: Recruiters spend less than 15-30 seconds on initial portfolio reviews. A multi-page layout runs a high risk of losing their attention. If they have to click through 4 separate pages to find your case studies and then another page to contact you, your conversion rate will drop.
>
> **Critique of the proposed sitemap**:
> 1. **Home/Landing Page**: Having a "Quick Intro" and a "CTA to Case Studies" is good. But having the Case Studies on a separate page forces an extra click. Since your core claim is about *high-fidelity premium web experiences*, the Landing Page itself should *show* this immediately.
> 2. **About Me Page**: This is highly redundant as a separate page. A tech recruiter wants to see your tech stack and bio in context with the work you do. Separating it weakens the narrative.
> 3. **Case Studies Page**: This is the core proof. Moving this off the homepage is a mistake.
> 4. **Contact Page**: A separate contact page with a form is okay, but if the goal is booking a call via Calendly, the scheduler should be embedded directly below the case studies.
>
> **Recommendations for Optimization**:
> - **Consolidate to a 3-Page / Focused Flow**:
>   - **Landing Page**: Keep it clean but merge the **About Me** section (tech stack & credentials) and a **Case Studies preview grid** right onto the homepage. This keeps the recruiter scrolled and engaged without clicking away.
>   - **Case Studies (Work) Page**: Keep this page for deep-dives only. If they click a case study on the homepage, take them here to read the full metrics and architectural breakdown.
>   - **Contact / Scheduling Page**: Keep this page dedicated strictly to booking a call, and ensure a Calendly embed is the primary, distraction-free focus.
> - **The Dotted Path**: Add clear, sticky navigation or a floating button that says "Book Call" at all times.

---

## 3. Implemented Improvements & Decisions

Based on the pressure-test feedback, the following refinements were made to the portfolio structure:

1. **Merge About Me into Home**: We eliminated the separate "About Me" page. Tech stack details and AI credentials will be integrated directly on the Landing Page as a trust section right below the hero.
2. **Case Studies Showcase on Home**: The home page will feature a direct grid displaying the 3 case studies, rather than just a link.
3. **One-Action Path Mapping**: We mapped out the navigation flow so that the primary route goes:
   `Home (Landing & trust details) ➔ Case Studies deep-dive ➔ Contact (Book Call)`.
   Additionally, a sticky global floating CTA button will ensure that the user can jump to the booking page from anywhere with a single click.
