def detect_career_path(skill_names):

    if (
        "python" in skill_names and
        "machine learning" in skill_names
    ):
        return "AI/ML Engineer"

    elif (
        "django" in skill_names or
        "flask" in skill_names
    ):
        return "Backend Developer"

    elif (
        "react" in skill_names or
        "javascript" in skill_names
    ):
        return "Frontend Developer"

    return "General"