from io import BytesIO

from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer
)

from reportlab.lib.styles import (
    getSampleStyleSheet
)


def generate_resume_pdf(data):

    buffer = BytesIO()

    pdf = SimpleDocTemplate(
        buffer
    )

    styles = getSampleStyleSheet()

    elements = []

    elements.append(
        Paragraph(
            data["name"],
            styles["Title"]
        )
    )

    elements.append(
        Paragraph(
            data["email"],
            styles["Normal"]
        )
    )

    elements.append(
        Spacer(1, 12)
    )

    elements.append(
        Paragraph(
            "<b>Professional Summary</b>",
            styles["Heading2"]
        )
    )

    elements.append(
        Paragraph(
            data["summary"],
            styles["Normal"]
        )
    )

    elements.append(
        Spacer(1, 12)
    )

    elements.append(
        Paragraph(
            "<b>Skills</b>",
            styles["Heading2"]
        )
    )

    elements.append(
        Paragraph(
            ", ".join(data["skills"]),
            styles["Normal"]
        )
    )

    elements.append(
        Spacer(1, 12)
    )

    elements.append(
        Paragraph(
            f"Career Path: {data['career_path']}",
            styles["Normal"]
        )
    )

    elements.append(
        Paragraph(
            f"Resume Score: {data['resume_score']}",
            styles["Normal"]
        )
    )

    elements.append(
        Paragraph(
            f"Placement Score: {data['placement_score']}",
            styles["Normal"]
        )
    )
    elements.append(
    Spacer(1, 12)
)

    elements.append(
        Paragraph(
            "<b>Bio</b>",
            styles["Heading2"]
        )
    )
    
    elements.append(
        Paragraph(
            data["bio"],
            styles["Normal"]
        )
    )
    
    elements.append(
        Spacer(1, 12)
    )
    
    elements.append(
        Paragraph(
            "<b>Education</b>",
            styles["Heading2"]
        )
    )
    
    elements.append(
        Paragraph(
            f"College: {data['college']}",
            styles["Normal"]
        )
    )
    
    elements.append(
        Paragraph(
            f"Graduation Year: {data['graduation_year']}",
            styles["Normal"]
        )
    )
    
    elements.append(
        Spacer(1, 12)
    )
    
    elements.append(
        Paragraph(
            "<b>Profiles</b>",
            styles["Heading2"]
        )
    )
    
    elements.append(
        Paragraph(
            f"GitHub: {data['github']}",
            styles["Normal"]
        )
    )
    
    elements.append(
    Paragraph(
        f"LinkedIn: {data['linkedin']}",
        styles["Normal"]
    )
)

    pdf.build(elements)

    buffer.seek(0)

    return buffer