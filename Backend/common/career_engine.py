CAREER_PATHS = {

    "AI/ML Engineer": {

        "required_skills": [
            "python",
            "machine learning",
            "git",
            "sql",
            "docker",
            "deep learning",
            "aws"
        ],

        "jobs": [

            {
                "title": "Machine Learning Engineer",
                "required_skills": [
                    "python",
                    "machine learning",
                    "git",
                    "sql",
                    "docker"
                ],
                "salary": "8-18 LPA",
                "demand": "Very High"
            },

            {
                "title": "Data Scientist",
                "required_skills": [
                    "python",
                    "machine learning",
                    "sql",
                    "statistics"
                ],
                "salary": "7-16 LPA",
                "demand": "High"
            },

            {
                "title": "AI Engineer",
                "required_skills": [
                    "python",
                    "machine learning",
                    "deep learning",
                    "docker"
                ],
                "salary": "8-20 LPA",
                "demand": "Very High"
            },

            {
                "title": "Computer Vision Engineer",
                "required_skills": [
                    "python",
                    "opencv",
                    "deep learning"
                ],
                "salary": "10-22 LPA",
                "demand": "High"
            },

            {
                "title": "MLOps Engineer",
                "required_skills": [
                    "python",
                    "docker",
                    "git",
                    "aws"
                ],
                "salary": "10-24 LPA",
                "demand": "Very High"
            }
        ]
    },

    "Backend Developer": {

        "required_skills": [
            "python",
            "django",
            "sql",
            "git",
            "docker"
        ],

        "jobs": [

            {
                "title": "Backend Developer",
                "required_skills": [
                    "python",
                    "django",
                    "sql",
                    "git"
                ],
                "salary": "6-12 LPA",
                "demand": "High"
            }
        ]
    },

    "Frontend Developer": {

        "required_skills": [
            "html",
            "css",
            "javascript",
            "react",
            "git"
        ],

        "jobs": [

            {
                "title": "Frontend Developer",
                "required_skills": [
                    "html",
                    "css",
                    "javascript",
                    "react"
                ],
                "salary": "5-10 LPA",
                "demand": "High"
            }
        ]
    }
}


def detect_career_path(skill_names):

    skill_names = [
        skill.lower()
        for skill in skill_names
    ]

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