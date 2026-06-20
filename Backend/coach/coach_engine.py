from common.career_engine import (
    CAREER_PATHS,
    detect_career_path
)


def generate_career_advice(
    skill_names,
    resume_score,
    placement_score
):

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

    if placement_score >= 85:

        current_level = (
            "Interview Ready"
        )

    elif placement_score >= 70:

        current_level = (
            "Intermediate"
        )

    else:

        current_level = (
            "Beginner"
        )

    if career_path == "AI/ML Engineer":

        certification = (
            "Microsoft Azure AI-900"
        )

        project = (
            "Computer Vision Attendance System"
        )

    elif career_path == "Backend Developer":

        certification = (
            "Django REST Framework"
        )

        project = (
            "Scalable Job Portal API"
        )

    elif career_path == "Frontend Developer":

        certification = (
            "React Developer"
        )

        project = (
            "Modern React Dashboard"
        )

    else:

        certification = (
            "General Programming Certification"
        )

        project = (
            "Portfolio Project"
        )

    placement_advice = (
        f"Reduce your skill gap by learning "
        f"{', '.join(missing_skills)}."
        if missing_skills
        else
        "Maintain your skills and focus on interviews."
    )

    return {

        "career_path":
        career_path,

        "resume_score":
        resume_score,

        "placement_score":
        placement_score,

        "current_level":
        current_level,

        "priority_focus":
        missing_skills,

        "next_certification":
        certification,

        "next_project":
        project,

        "placement_advice":
        placement_advice
    }