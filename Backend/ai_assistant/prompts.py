# ============================================
# OrbitX Prompt Templates
# ============================================

DEFAULT_RESPONSE = """
I understand your question.

Based on your current profile, I'll analyze your career data and guide you with the best possible recommendation.

If you need specific help, you can ask:

• Can I become an AI Engineer?
• Review my resume
• What skills am I missing?
• Best certification for me
• Create a roadmap
• What jobs can I get?
"""


AI_ENGINEER_RESPONSE = """
You are already moving toward becoming an AI/ML Engineer.

Current Progress

Career Path:
{career_path}

Placement Score:
{placement_score}%

Resume Score:
{resume_score}

Missing Skills:
{missing_skills}

Recommended Next Steps

1. Learn Deep Learning
2. Learn TensorFlow / PyTorch
3. Learn AWS or Azure
4. Build Production Projects
5. Practice DSA

Estimated Timeline

4-6 Months
"""


CERTIFICATION_RESPONSE = """
Based on your current profile, I recommend the following certifications.

⭐ Priority 1
Microsoft Azure AI-900

Reason:
Excellent starting certification for AI/ML students.

------------------------

⭐ Priority 2
AWS Cloud Practitioner

Reason:
Cloud knowledge is essential for deploying AI applications.

------------------------

⭐ Priority 3
TensorFlow Developer Certificate

Reason:
Strengthens your Deep Learning skills.
"""


RESUME_RESPONSE = """
Resume Score

{resume_score}

Strengths

• Good project portfolio
• Technical skills are improving

Suggestions

• Add measurable achievements

• Add GitHub project links

• Add deployed project links

• Improve project descriptions

Target Resume Score

95+
"""


PLACEMENT_RESPONSE = """
Placement Readiness

{placement_score}%

Career Path

{career_path}

Missing Skills

{missing_skills}

Recommended Goal

Become Interview Ready within the next 2-3 months.
"""


SKILL_RESPONSE = """
Current Missing Skills

{missing_skills}

Priority

Complete these skills before starting interview preparation.

Recommended Order

1. Deep Learning

2. AWS

3. Production Deployment
"""


ROADMAP_RESPONSE = """
Personal Learning Roadmap

Week 1-2

Deep Learning

Week 3-4

TensorFlow

Week 5

AWS

Week 6

Build Project

Week 7

Deploy Project

Week 8

Interview Preparation
"""


JOB_RESPONSE = """
Recommended Jobs

• Machine Learning Engineer

• AI Engineer

• Data Scientist

• Computer Vision Engineer

Based on your current profile, you are closest to Machine Learning Engineer.
"""