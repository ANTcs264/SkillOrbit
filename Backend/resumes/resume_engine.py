from common.career_engine import (
    CAREER_PATHS,
    detect_career_path
)


def get_missing_skills(skill_names):

    career_path = detect_career_path(
        skill_names
    )

    career_data = CAREER_PATHS.get(
        career_path,
        {}
    )

    required_skills = career_data.get(
        "required_skills",
        []
    )

    missing_skills = [

        skill

        for skill in required_skills

        if skill not in skill_names
    ]

    return (
        career_path,
        required_skills,
        missing_skills
    )


def calculate_resume_score(

    resume,
    profile,
    skill_names

):

    score = 0

    strengths = []

    suggestions = []

    if resume.summary:

        score += 20

        strengths.append(
            "Professional summary added"
        )

    else:

        suggestions.append(
            "Add a professional summary"
        )

    if profile.bio:

        score += 15

        strengths.append(
            "Profile bio completed"
        )

    else:

        suggestions.append(
            "Complete your profile bio"
        )

    if len(skill_names) >= 5:

        score += 30

        strengths.append(
            "Strong skill portfolio"
        )

    else:

        suggestions.append(
            "Add more technical skills"
        )

    if profile.linkedin:

        score += 15

        strengths.append(
            "LinkedIn profile added"
        )

    else:

        suggestions.append(
            "Add LinkedIn profile"
        )

    if profile.github:

        score += 20

        strengths.append(
            "GitHub profile added"
        )

    else:

        suggestions.append(
            "Add GitHub profile"
        )

    return (
        score,
        strengths,
        suggestions
    )


def calculate_resume_completeness(

    resume,
    profile,
    skill_names

):

    completed_fields = 0

    total_fields = 7

    if resume.summary:
        completed_fields += 1

    if profile.bio:
        completed_fields += 1

    if profile.github:
        completed_fields += 1

    if profile.linkedin:
        completed_fields += 1

    if profile.college:
        completed_fields += 1

    if profile.graduation_year:
        completed_fields += 1

    if len(skill_names) > 0:
        completed_fields += 1

    return round(
        (
            completed_fields
            /
            total_fields
        ) * 100,
        2
    )


def generate_roadmap(

    missing_skills,
    profile,
    skill_names

):

    roadmap = []

    for skill in missing_skills:

        roadmap.append(
            f"Learn {skill.title()}"
        )

    if len(skill_names) < 5:

        roadmap.append(
            "Add More Technical Skills"
        )

    if not profile.github:

        roadmap.append(
            "Create GitHub Portfolio"
        )

    if not profile.linkedin:

        roadmap.append(
            "Create LinkedIn Profile"
        )

    roadmap.append(
        "Build 2 Major Projects"
    )

    return roadmap