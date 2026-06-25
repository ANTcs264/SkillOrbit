from .prompts import (
    DEFAULT_RESPONSE,
    AI_ENGINEER_RESPONSE,
    CERTIFICATION_RESPONSE,
    RESUME_RESPONSE,
    PLACEMENT_RESPONSE,
    SKILL_RESPONSE,
    ROADMAP_RESPONSE,
    JOB_RESPONSE,
)


# ============================================
# Intent Detection
# ============================================

def detect_intent(question):

    question = question.lower().strip()

    if any(word in question for word in [
        "certification",
        "certificate",
        "certified",
        "ai-900",
        "azure",
        "aws"
    ]):
        return "certification"

    elif any(word in question for word in [
        "resume",
        "cv"
    ]):
        return "resume"

    elif any(word in question for word in [
        "placement",
        "interview",
        "job ready"
    ]):
        return "placement"

    elif any(word in question for word in [
        "skill",
        "missing",
        "gap"
    ]):
        return "skills"

    elif any(word in question for word in [
        "roadmap",
        "plan",
        "learn",
        "study"
    ]):
        return "roadmap"

    elif any(word in question for word in [
        "job",
        "company",
        "role"
    ]):
        return "jobs"

    elif any(word in question for word in [
        "ai engineer",
        "machine learning",
        "ml engineer",
        "aiml"
    ]):
        return "ai_engineer"

    return "default"


# ============================================
# Main AI Engine
# ============================================

def generate_ai_response(
    question,
    career_path,
    placement_score,
    resume_score,
    missing_skills,
    current_skills,
):

    intent = detect_intent(question)

    missing = (
        ", ".join(missing_skills)
        if missing_skills
        else "None"
    )

    if intent == "ai_engineer":

        return {
            "intent": intent,
            "answer": AI_ENGINEER_RESPONSE.format(
                career_path=career_path,
                placement_score=placement_score,
                resume_score=resume_score,
                missing_skills=missing,
            ),
        }

    elif intent == "certification":

        return {
            "intent": intent,
            "answer": CERTIFICATION_RESPONSE,
        }

    elif intent == "resume":

        return {
            "intent": intent,
            "answer": RESUME_RESPONSE.format(
                resume_score=resume_score
            ),
        }

    elif intent == "placement":

        return {
            "intent": intent,
            "answer": PLACEMENT_RESPONSE.format(
                career_path=career_path,
                placement_score=placement_score,
                missing_skills=missing,
            ),
        }

    elif intent == "skills":

        return {
            "intent": intent,
            "answer": SKILL_RESPONSE.format(
                missing_skills=missing,
            ),
        }

    elif intent == "roadmap":

        return {
            "intent": intent,
            "answer": ROADMAP_RESPONSE,
        }

    elif intent == "jobs":

        return {
            "intent": intent,
            "answer": JOB_RESPONSE,
        }

    return {
        "intent": "default",
        "answer": DEFAULT_RESPONSE,
    }