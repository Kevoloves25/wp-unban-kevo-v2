// script.js
document.addEventListener('DOMContentLoaded', function() {
    // DOM elements
    const banTypeSelect = document.getElementById('banType');
    const reasonGroup = document.getElementById('reasonGroup');
    const banReasonSelect = document.getElementById('banReason');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const unbanForm = document.getElementById('unbanForm');
    const emailSection = document.getElementById('emailSection');
    const emailText = document.getElementById('emailText');
    const copyBtn = document.getElementById('copyBtn');
    const sendBtn = document.getElementById('sendBtn');
    const whatsappLink = document.getElementById('whatsappLink');
    const telegramLink = document.getElementById('telegramLink');
    
    // Ban reasons based on ban type
    const banReasons = {
        temporary: [
            "I was temporarily banned by mistake",
            "I was not violating any terms of service",
            "This is my first offense and I promise to follow the rules",
            "I need my account for important communication",
            "My account was compromised and used improperly",
            "I was only using WhatsApp for personal communication",
            "I believe this was an automated error"
        ],
        permanent: [
            "I believe my permanent ban was a mistake",
            "I've learned my lesson and promise to follow all rules",
            "My account is important for my business/work",
            "I was not aware I was violating terms of service",
            "My account was hacked and misused by someone else",
            "I need access to my important chats and contacts",
            "I'm willing to verify my identity and comply with all policies"
        ]
    };
    
    // Email templates based on ban type and reason
    const emailTemplates = {
        temporary: {
            "I was temporarily banned by mistake": {
                subject: "Appeal for Temporary WhatsApp Ban Removal - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the temporary ban on my WhatsApp account associated with phone number [PHONE].

I believe this ban was issued in error as I have not violated WhatsApp's Terms of Service. I use WhatsApp primarily for personal communication and rely on it for important contacts.

I kindly request you to review my account and lift the temporary ban. I assure you that I will adhere to all WhatsApp policies going forward.

Thank you for your time and consideration.

Sincerely,
[PHONE] User`
            },
            "I was not violating any terms of service": {
                subject: "Appeal Regarding Temporary WhatsApp Ban - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the temporary ban on my WhatsApp account (phone: [PHONE]).

To the best of my knowledge, I have not violated any of WhatsApp's Terms of Service. I use the app responsibly for communication with friends and family.

I would appreciate if you could review my account activity and reconsider the ban. I value my WhatsApp account and promise to continue using it appropriately.

Thank you for your attention to this matter.

Sincerely,
[PHONE] User`
            },
            "This is my first offense and I promise to follow the rules": {
                subject: "First Offense Appeal - Temporary WhatsApp Ban - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing regarding the temporary ban on my WhatsApp account associated with phone number [PHONE].

I understand that I may have unintentionally violated a policy, but this is my first offense. I have now carefully reviewed the Terms of Service and will ensure full compliance moving forward.

I kindly request a second chance and the removal of the temporary ban. WhatsApp is essential for my daily communication.

Thank you for your understanding.

Sincerely,
[PHONE] User`
            },
            "I need my account for important communication": {
                subject: "Urgent: WhatsApp Temporary Ban Appeal - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am urgently appealing the temporary ban on my WhatsApp account (phone: [PHONE]) as I rely on it for important communication.

I use WhatsApp to stay in touch with family, for work-related conversations, and emergency contacts. The ban is significantly impacting my daily life and responsibilities.

I respectfully request an expedited review of my account and lifting of the temporary restriction.

Thank you for your prompt attention.

Sincerely,
[PHONE] User`
            },
            "My account was compromised and used improperly": {
                subject: "Account Security Issue - Temporary WhatsApp Ban Appeal - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the temporary ban on my WhatsApp account associated with phone number [PHONE].

I believe my account may have been compromised and used without my knowledge, leading to this ban. I have since secured my account with two-step verification.

I request a review of my account activity and removal of the ban. I assure you of my commitment to account security going forward.

Thank you for your assistance.

Sincerely,
[PHONE] User`
            },
            "I was only using WhatsApp for personal communication": {
                subject: "Personal Use Appeal - Temporary WhatsApp Ban - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the temporary ban on my WhatsApp account (phone: [PHONE]).

I use WhatsApp exclusively for personal communication with friends and family. I was not engaged in any activities that would violate terms of service.

I kindly request you to review my account and lift the temporary restriction. My WhatsApp account is important for staying connected with loved ones.

Thank you for your consideration.

Sincerely,
[PHONE] User`
            },
            "I believe this was an automated error": {
                subject: "Possible Automated Error - Temporary WhatsApp Ban Appeal - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the temporary ban on my WhatsApp account associated with phone number [PHONE].

I believe this ban may have been the result of an automated error or false positive in your system. My usage patterns have been consistent and within guidelines.

I request a manual review of my account to verify its compliance with WhatsApp policies.

Thank you for your time and attention to this matter.

Sincerely,
[PHONE] User`
            }
        },
        permanent: {
            "I believe my permanent ban was a mistake": {
                subject: "Appeal for Permanent WhatsApp Ban Reversal - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the permanent ban on my WhatsApp account associated with phone number [PHONE].

I believe this permanent ban was issued in error. I have always used WhatsApp responsibly and within the guidelines outlined in your Terms of Service.

I respectfully request a thorough review of my account and reconsideration of the permanent ban. I value my WhatsApp account greatly.

Thank you for your consideration.

Sincerely,
[PHONE] User`
            },
            "I've learned my lesson and promise to follow all rules": {
                subject: "Appeal for Second Chance - Permanent WhatsApp Ban - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the permanent ban on my WhatsApp account (phone: [PHONE]).

I acknowledge that I may have violated WhatsApp's policies, but I have learned from this experience. I have thoroughly reviewed the Terms of Service and promise strict adherence going forward.

I humbly request a second chance and the opportunity to use WhatsApp responsibly again.

Thank you for considering my appeal.

Sincerely,
[PHONE] User`
            },
            "My account is important for my business/work": {
                subject: "Business Necessity Appeal - Permanent WhatsApp Ban - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the permanent ban on my WhatsApp account associated with phone number [PHONE].

My WhatsApp account is essential for my business operations and professional communication. The ban is significantly impacting my work and livelihood.

I respectfully request a review of my account and reconsideration of the permanent ban. I assure you of my commitment to compliant usage.

Thank you for your understanding.

Sincerely,
[PHONE] User`
            },
            "I was not aware I was violating terms of service": {
                subject: "Unawareness Appeal - Permanent WhatsApp Ban - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the permanent ban on my WhatsApp account (phone: [PHONE]).

I was not aware that my activities violated WhatsApp's Terms of Service. I have since educated myself on the policies and understand what constitutes appropriate usage.

I kindly request a review of my account and reversal of the permanent ban. I promise to comply fully with all guidelines.

Thank you for your consideration.

Sincerely,
[PHONE] User`
            },
            "My account was hacked and misused by someone else": {
                subject: "Account Compromise Appeal - Permanent WhatsApp Ban - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the permanent ban on my WhatsApp account associated with phone number [PHONE].

I believe my account was compromised and used by someone else without my authorization, leading to this ban. I have since secured my account and enabled additional security measures.

I request a review of the suspicious activity and reconsideration of the permanent ban.

Thank you for your assistance.

Sincerely,
[PHONE] User`
            },
            "I need access to my important chats and contacts": {
                subject: "Data Access Appeal - Permanent WhatsApp Ban - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the permanent ban on my WhatsApp account (phone: [PHONE]).

While I understand the seriousness of the ban, I urgently need access to my important chats, contacts, and media stored in my WhatsApp account.

I respectfully request temporary access to retrieve this vital information, or ideally, a reversal of the permanent ban with a commitment to policy compliance.

Thank you for your understanding.

Sincerely,
[PHONE] User`
            },
            "I'm willing to verify my identity and comply with all policies": {
                subject: "Verification Offer - Permanent WhatsApp Ban Appeal - Phone: [PHONE]",
                body: `Dear WhatsApp Support Team,

I am writing to appeal the permanent ban on my WhatsApp account associated with phone number [PHONE].

I am willing to undergo any identity verification process required and provide any necessary documentation to prove my commitment to following WhatsApp policies.

I respectfully request an opportunity to demonstrate my sincerity and have the permanent ban reviewed.

Thank you for your consideration.

Sincerely,
[PHONE] User`
            }
        }
    };
    
    // Social media links (update these with your actual links)
    /*whatsappLink.href = "https://whatsapp.com/channel/your-channel-link";
    telegramLink.href = "https://t.me/your-telegram-channel";*/
    
    // Event listener for ban type selection
    banTypeSelect.addEventListener('change', function() {
        if (this.value) {
            // Show reason selection with animation
            reasonGroup.style.display = 'block';
            setTimeout(() => {
                reasonGroup.style.opacity = '1';
                reasonGroup.style.transform = 'translateY(0)';
            }, 10);
            
            // Clear previous options
            banReasonSelect.innerHTML = '<option value="" disabled selected>Select a reason</option>';
            
            // Add new options based on ban type
            banReasons[this.value].forEach(reason => {
                const option = document.createElement('option');
                option.value = reason;
                option.textContent = reason;
                banReasonSelect.appendChild(option);
            });
        } else {
            reasonGroup.style.opacity = '0';
            reasonGroup.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                reasonGroup.style.display = 'none';
            }, 300);
        }
    });
    
    // Form submission handler
    unbanForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validate form
        if (!banTypeSelect.value || !banReasonSelect.value || !phoneNumberInput.value) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Generate email content
        const phone = phoneNumberInput.value;
        const banType = banTypeSelect.value;
        const reason = banReasonSelect.value;
        
        const template = emailTemplates[banType][reason];
        let emailBody = template.body.replace(/\[PHONE\]/g, phone);
        
        const emailContent = `Subject: ${template.subject.replace('[PHONE]', phone)}\n\n${emailBody}`;
        
        // Display email content
        emailText.textContent = emailContent;
        emailSection.style.display = 'block';
        
        // Scroll to email section
        emailSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // Copy to clipboard functionality
    copyBtn.addEventListener('click', function() {
        const textArea = document.createElement('textarea');
        textArea.value = emailText.textContent;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        
        // Visual feedback
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copied!';
        copyBtn.style.background = '#2E7D32';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
    });
    
    // Send email functionality - CHANGED TO OPEN DEFAULT EMAIL APP
    sendBtn.addEventListener('click', function() {
        const phone = phoneNumberInput.value;
        const banType = banTypeSelect.value;
        const reason = banReasonSelect.value;
        
        const template = emailTemplates[banType][reason];
        const subject = encodeURIComponent(template.subject.replace('[PHONE]', phone));
        const body = encodeURIComponent(template.body.replace(/\[PHONE\]/g, phone));
        
        // Create a temporary link to open default email app
        const emailLink = document.createElement('a');
        emailLink.href = `mailto:support@support.whatsapp.com?subject=${subject}&body=${body}`;
        emailLink.click();
    });
    
    // Prevent text selection on email text
    emailText.addEventListener('selectstart', function(e) {
        e.preventDefault();
        return false;
    });
    
    // Add animation to form elements when they become visible
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe form groups for animation
    document.querySelectorAll('.form-group').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
});