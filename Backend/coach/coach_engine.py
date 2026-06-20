from common.career_engine import (
    CAREER_PATHS,
    detect_career_path
)


def generate_career_advice(skill_names):

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

    missing_skills = []

    for skill in required_skills:

        if skill not in skill_names:

            missing_skills.append(
                skill
            )

    certification = None

    if career_path == "AI/ML Engineer":

        certification = (
            "Microsoft Azure AI-900"
        )

    elif career_path == "Backend Developer":

        certification = (
            "Django REST Framework"
        )

    elif career_path == "Frontend Developer":

        certification = (
            "React Developer"
        )

    project = None

    if career_path == "AI/ML Engineer":

        project = (
            "Computer Vision Attendance System"
        )

    elif career_path == "Backend Developer":

        project = (
            "Scalable Job Portal API"
        )

    elif career_path == "Frontend Developer":

        project = (
            "Modern React Dashboard"
        )

    return {
        "career_path": career_path,
        "missing_skills": missing_skills,
        "next_certification": certification,
        "next_project": project
    }