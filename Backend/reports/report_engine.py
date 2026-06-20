def generate_report(
    career_path,
    placement_score,
    resume_score,
    missing_skills
):

    report = f"""
==================================

SKILLORBIT AI CAREER REPORT

Career Path:
{career_path}

Placement Score:
{placement_score}

Resume Score:
{resume_score}

Missing Skills:
{", ".join(missing_skills)}

Recommended Certification:
Microsoft Azure AI-900

Recommended Project:
Computer Vision Attendance System

Estimated Job Readiness:
4-6 Months

==================================
"""

    return report