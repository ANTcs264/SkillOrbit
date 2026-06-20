def generate_resume_review(
    career_path,
    resume_score,
    placement_score,
    missing_skills
):

    strengths = []
    weaknesses = []
    recommendations = []

    if resume_score >= 80:

        strengths.append(
            "Strong Resume Profile"
        )

    else:

        weaknesses.append(
            "Resume needs improvement"
        )

    if placement_score >= 80:

        strengths.append(
            "Good Placement Readiness"
        )

    else:

        weaknesses.append(
            "Placement readiness is low"
        )

    if missing_skills:

        for skill in missing_skills:

            weaknesses.append(
                f"Missing {skill}"
            )

            recommendations.append(
                f"Learn {skill.title()}"
            )

    else:

        strengths.append(
            "No major skill gaps"
        )

    recommendations.append(
        "Build 2 Industry-Level Projects"
    )

    return {

        "career_path":
        career_path,

        "overall_score":
        round(
            (
                resume_score +
                placement_score
            ) / 2,
            2
        ),

        "strengths":
        strengths,

        "weaknesses":
        weaknesses,

        "recommendations":
        recommendations
    }