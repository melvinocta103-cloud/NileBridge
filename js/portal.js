/**
 * NileBridge Institutional Digital Platform
 * Applicant Portal Engine & 7-Step Application Wizard
 */

// Simulated active applicant session
const DEFAULT_USER = {
  name: "Samuel Kintu",
  email: "samuel.kintu@example.com",
  phone: "+256 772 112 334",
  applicationId: "APP-2026-000123"
};

function getActiveApplicant() {
  const session = localStorage.getItem("nilebridge_active_user");
  if (session) {
    try { return JSON.parse(session); } catch(e) {}
  }
  localStorage.setItem("nilebridge_active_user", JSON.stringify(DEFAULT_USER));
  return DEFAULT_USER;
}

document.addEventListener('DOMContentLoaded', () => {
  initPortalHeader();
  initApplicationWizard();
  initApplicantDashboard();
  initStatusTracker();
  initDocumentManager();
  initAuthForms();
});

/* ── 1. Portal Header & User Info ── */
function initPortalHeader() {
  const user = getActiveApplicant();
  const userNameElements = document.querySelectorAll('.active-user-name');
  const userAvatarElements = document.querySelectorAll('.user-avatar-badge');

  userNameElements.forEach(el => el.innerText = user.name);
  userAvatarElements.forEach(el => {
    const initials = user.name.split(' ').map(n => n[0]).join('').toUpperCase();
    el.innerText = initials;
  });

  const logoutBtn = document.getElementById('portalLogoutBtn');
  logoutBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (confirm("Are you sure you want to sign out?")) {
      window.location.href = "login.html";
    }
  });
}

/* ── 2. 7-Step Application Wizard ── */
function initApplicationWizard() {
  const wizardForm = document.getElementById('applicationWizardForm');
  if (!wizardForm) return;

  let currentStep = 1;
  const totalSteps = 7;
  const stepContents = document.querySelectorAll('.wizard-step-content');
  const stepItems = document.querySelectorAll('.wizard-step-item');
  const progressLine = document.querySelector('.wizard-step-line-progress');
  const prevBtn = document.getElementById('wizardPrevBtn');
  const nextBtn = document.getElementById('wizardNextBtn');
  const saveDraftBtn = document.getElementById('wizardSaveDraftBtn');

  // Populate programme dropdown if present
  const progSelect = document.getElementById('wizardProgrammeSelect');
  if (progSelect && window.NileBridgeData) {
    progSelect.innerHTML = '<option value="">-- Select Degree Programme --</option>';
    window.NileBridgeData.programmes.forEach(p => {
      progSelect.innerHTML += `<option value="${p.id}" data-faculty="${p.facultyName}" data-fee="${p.feePerSemester}">${p.name} (${p.degreeLevel}) - ${p.duration}</option>`;
    });

    progSelect.addEventListener('change', () => {
      const selectedOption = progSelect.options[progSelect.selectedIndex];
      const feePreview = document.getElementById('wizardFeePreview');
      if (feePreview && selectedOption.dataset.fee) {
        feePreview.innerText = selectedOption.dataset.fee + " per semester";
      }
    });
  }

  function updateWizardUI() {
    stepContents.forEach((stepEl, idx) => {
      if (idx + 1 === currentStep) {
        stepEl.classList.add('active');
      } else {
        stepEl.classList.remove('active');
      }
    });

    stepItems.forEach((item, idx) => {
      const stepNum = idx + 1;
      item.classList.remove('active', 'completed');
      if (stepNum === currentStep) {
        item.classList.add('active');
      } else if (stepNum < currentStep) {
        item.classList.add('completed');
      }
    });

    if (progressLine) {
      const percent = ((currentStep - 1) / (totalSteps - 1)) * 100;
      progressLine.style.width = percent + '%';
    }

    if (prevBtn) {
      prevBtn.style.display = currentStep > 1 && currentStep < totalSteps ? 'inline-flex' : 'none';
    }

    if (nextBtn) {
      if (currentStep === totalSteps - 1) {
        nextBtn.innerHTML = 'Submit Application <i class="fas fa-check-circle"></i>';
        nextBtn.className = 'btn btn-primary';
      } else if (currentStep === totalSteps) {
        nextBtn.style.display = 'none';
        if (saveDraftBtn) saveDraftBtn.style.display = 'none';
      } else {
        nextBtn.innerHTML = 'Continue <i class="fas fa-arrow-right"></i>';
        nextBtn.className = 'btn btn-primary';
      }
    }

    // If on Review Step (Step 6), compile review summary
    if (currentStep === 6) {
      populateReviewStep();
    }

    window.scrollTo({ top: 100, behavior: 'smooth' });
  }

  function validateCurrentStep() {
    const currentStepContainer = document.querySelector(`.wizard-step-content[data-step="${currentStep}"]`);
    if (!currentStepContainer) return true;

    const requiredInputs = currentStepContainer.querySelectorAll('[required]');
    for (let input of requiredInputs) {
      if (!input.value.trim() || (input.type === 'checkbox' && !input.checked)) {
        input.focus();
        input.classList.add('is-invalid');
        alert(`Please complete the required field: ${input.getAttribute('placeholder') || input.name || 'required input'}`);
        return false;
      }
      input.classList.remove('is-invalid');
    }
    return true;
  }

  function populateReviewStep() {
    const reviewBox = document.getElementById('applicationReviewSummary');
    if (!reviewBox) return;

    const formData = new FormData(wizardForm);
    const progId = formData.get('programmeId');
    const programmeObj = window.NileBridgeData?.programmes.find(p => p.id === progId);

    reviewBox.innerHTML = `
      <div class="card" style="padding: var(--sp-6); background: var(--clr-surface); border: 1px solid var(--clr-border);">
        <h4 style="color: var(--clr-primary); margin-bottom: var(--sp-4); border-bottom: 1px solid var(--clr-border); padding-bottom: var(--sp-2);">1. Personal & Contact Information</h4>
        <p><strong>Full Name:</strong> ${formData.get('firstName')} ${formData.get('lastName')}</p>
        <p><strong>Email Address:</strong> ${formData.get('email')}</p>
        <p><strong>Phone Number:</strong> ${formData.get('phone')}</p>
        <p><strong>Nationality:</strong> ${formData.get('nationality') || 'Ugandan'}</p>
        
        <h4 style="color: var(--clr-primary); margin: var(--sp-6) 0 var(--sp-4); border-bottom: 1px solid var(--clr-border); padding-bottom: var(--sp-2);">2. Academic Programme Choice</h4>
        <p><strong>Selected Degree:</strong> ${programmeObj ? programmeObj.name : 'BSc in Computer Science'}</p>
        <p><strong>Intake Session:</strong> ${formData.get('intake') || 'September 2026'}</p>
        <p><strong>Study Mode:</strong> ${formData.get('studyMode') || 'Full-Time'}</p>
        <p><strong>Campus:</strong> ${formData.get('campus') || 'Riverfront Main Campus'}</p>

        <h4 style="color: var(--clr-primary); margin: var(--sp-6) 0 var(--sp-4); border-bottom: 1px solid var(--clr-border); padding-bottom: var(--sp-2);">3. Uploaded Credentials</h4>
        <p><i class="fas fa-check-circle text-success"></i> High School Academic Certificate (Attached)</p>
        <p><i class="fas fa-check-circle text-success"></i> Official Academic Transcript (Attached)</p>
        <p><i class="fas fa-check-circle text-success"></i> Passport Identification & Photo (Attached)</p>
      </div>
    `;
  }

  function submitApplication() {
    const formData = new FormData(wizardForm);
    const newAppId = `APP-2026-${Math.floor(100000 + Math.random() * 900000)}`;
    const progId = formData.get('programmeId') || 'prog-bsc-cs';
    const programmeObj = window.NileBridgeData?.programmes.find(p => p.id === progId) || {
      name: "BSc in Computer Science",
      facultyName: "Faculty of Science & Technology"
    };

    const newApp = {
      id: newAppId,
      applicantName: `${formData.get('firstName') || 'Samuel'} ${formData.get('lastName') || 'Kintu'}`,
      email: formData.get('email') || 'applicant@nilebridge.edu',
      phone: formData.get('phone') || '+256 772 000 000',
      programmeId: progId,
      programmeName: programmeObj.name,
      facultyName: programmeObj.facultyName,
      intake: formData.get('intake') || 'September 2026',
      campus: formData.get('campus') || 'Riverfront Main Campus',
      status: 'SUBMITTED',
      progress: 40,
      submittedDate: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString().split('T')[0],
      documents: [
        { name: "Academic_Certificate.pdf", type: "Academic", status: "PENDING", uploadedAt: new Date().toISOString().split('T')[0] },
        { name: "Passport_Photo.jpg", type: "Identity", status: "PENDING", uploadedAt: new Date().toISOString().split('T')[0] }
      ],
      remarks: "Application submitted successfully. Under initial registry verification."
    };

    const apps = window.getNileBridgeStorage();
    apps.unshift(newApp);
    window.saveNileBridgeApplications(apps);

    // Update active user session application
    const user = getActiveApplicant();
    user.applicationId = newAppId;
    localStorage.setItem("nilebridge_active_user", JSON.stringify(user));

    // Show step 7 (Confirmation)
    const confirmedIdEl = document.getElementById('confirmedAppNumber');
    if (confirmedIdEl) confirmedIdEl.innerText = newAppId;

    currentStep = 7;
    updateWizardUI();
  }

  nextBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (!validateCurrentStep()) return;

    if (currentStep === 6) {
      submitApplication();
    } else if (currentStep < totalSteps) {
      currentStep++;
      updateWizardUI();
    }
  });

  prevBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentStep > 1) {
      currentStep--;
      updateWizardUI();
    }
  });

  saveDraftBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    alert("Your draft application has been securely saved. You can resume anytime from your dashboard.");
  });

  // Step item click navigation
  stepItems.forEach(item => {
    item.addEventListener('click', () => {
      const targetStep = parseInt(item.getAttribute('data-step'), 10);
      if (targetStep < currentStep) {
        currentStep = targetStep;
        updateWizardUI();
      }
    });
  });

  // Dropzone drag/drop simulation
  const dropzones = document.querySelectorAll('.dropzone');
  dropzones.forEach(zone => {
    zone.addEventListener('dragover', (e) => {
      e.preventDefault();
      zone.classList.add('dragover');
    });
    zone.addEventListener('dragleave', () => zone.classList.remove('dragover'));
    zone.addEventListener('drop', (e) => {
      e.preventDefault();
      zone.classList.remove('dragover');
      const files = e.dataTransfer.files;
      if (files.length) handleDropzoneFile(zone, files[0].name);
    });
    zone.addEventListener('click', () => {
      const input = zone.querySelector('input[type="file"]');
      if (input) input.click();
    });
  });

  const fileInputs = document.querySelectorAll('.dropzone input[type="file"]');
  fileInputs.forEach(input => {
    input.addEventListener('change', () => {
      if (input.files.length) {
        handleDropzoneFile(input.closest('.dropzone'), input.files[0].name);
      }
    });
  });

  function handleDropzoneFile(zone, fileName) {
    let preview = zone.parentElement.querySelector('.uploaded-file-item');
    if (!preview) {
      preview = document.createElement('div');
      preview.className = 'uploaded-file-item';
      zone.parentElement.appendChild(preview);
    }
    preview.innerHTML = `
      <div class="file-info">
        <i class="fas fa-file-pdf file-icon"></i>
        <div>
          <div style="font-weight: var(--fw-semibold); font-size: var(--fs-sm);">${fileName}</div>
          <div style="font-size: var(--fs-xs); color: var(--clr-success);"><i class="fas fa-check"></i> Ready for upload (Verified format)</div>
        </div>
      </div>
      <button type="button" class="btn btn-sm btn-outline-accent" onclick="this.closest('.uploaded-file-item').remove()">&times; Remove</button>
    `;
  }

  updateWizardUI();
}

/* ── 3. Applicant Dashboard ── */
function initApplicantDashboard() {
  const dashContainer = document.getElementById('applicantDashboardView');
  if (!dashContainer) return;

  const user = getActiveApplicant();
  const apps = window.getNileBridgeStorage();
  const currentApp = apps.find(a => a.id === user.applicationId) || apps[0];

  if (!currentApp) return;

  const appIdEl = document.getElementById('dashAppId');
  const progNameEl = document.getElementById('dashProgName');
  const statusBadgeEl = document.getElementById('dashStatusBadge');
  const progressBarEl = document.getElementById('dashProgressBar');
  const progressTextEl = document.getElementById('dashProgressText');
  const remarksEl = document.getElementById('dashRemarks');

  if (appIdEl) appIdEl.innerText = currentApp.id;
  if (progNameEl) progNameEl.innerText = currentApp.programmeName;
  if (progressTextEl) progressTextEl.innerText = `${currentApp.progress}% Completed`;
  if (progressBarEl) progressBarEl.style.width = `${currentApp.progress}%`;
  if (remarksEl) remarksEl.innerText = currentApp.remarks || "Your application is currently being evaluated by the admissions committee.";

  if (statusBadgeEl) {
    const statusClass = currentApp.status.toLowerCase();
    statusBadgeEl.className = `status-badge ${statusClass}`;
    statusBadgeEl.innerText = currentApp.status.replace('_', ' ');
  }
}

/* ── 4. Status Tracker & Offer Letter ── */
function initStatusTracker() {
  const statusContainer = document.getElementById('applicantStatusView');
  if (!statusContainer) return;

  const user = getActiveApplicant();
  const apps = window.getNileBridgeStorage();
  const currentApp = apps.find(a => a.id === user.applicationId) || apps[0];

  if (!currentApp) return;

  const appIdEl = document.getElementById('statusAppId');
  const progNameEl = document.getElementById('statusProgName');
  const campusEl = document.getElementById('statusCampus');
  const intakeEl = document.getElementById('statusIntake');
  const remarksEl = document.getElementById('statusRemarks');
  const offerLetterBox = document.getElementById('offerLetterDownloadBox');

  if (appIdEl) appIdEl.innerText = currentApp.id;
  if (progNameEl) progNameEl.innerText = currentApp.programmeName;
  if (campusEl) campusEl.innerText = currentApp.campus;
  if (intakeEl) intakeEl.innerText = currentApp.intake;
  if (remarksEl) remarksEl.innerText = currentApp.remarks;

  // Render Offer Letter button if Approved
  if (offerLetterBox) {
    if (currentApp.status === 'APPROVED') {
      offerLetterBox.style.display = 'block';
    } else {
      offerLetterBox.style.display = 'none';
    }
  }

  // Update Timeline steps
  const timelineSteps = document.querySelectorAll('.portal-timeline-item');
  const statusOrder = ['SUBMITTED', 'DOCUMENT_REVIEW', 'UNDER_REVIEW', 'APPROVED'];
  const currentIndex = statusOrder.indexOf(currentApp.status);

  timelineSteps.forEach((step, idx) => {
    step.classList.remove('done', 'active');
    if (idx < currentIndex) {
      step.classList.add('done');
    } else if (idx === currentIndex) {
      step.classList.add('active');
    }
  });
}

/* ── 5. Document Management ── */
function initDocumentManager() {
  const docList = document.getElementById('portalDocumentsList');
  if (!docList) return;

  const user = getActiveApplicant();
  const apps = window.getNileBridgeStorage();
  const currentApp = apps.find(a => a.id === user.applicationId) || apps[0];

  if (!currentApp || !currentApp.documents) return;

  docList.innerHTML = '';
  currentApp.documents.forEach(doc => {
    let badgeClass = 'status-badge ';
    if (doc.status === 'VERIFIED') badgeClass += 'approved';
    else if (doc.status === 'NEEDS_REUPLOAD') badgeClass += 'rejected';
    else badgeClass += 'submitted';

    docList.innerHTML += `
      <tr>
        <td><strong>${doc.name}</strong></td>
        <td>${doc.type}</td>
        <td>${doc.uploadedAt}</td>
        <td><span class="${badgeClass}">${doc.status.replace('_', ' ')}</span></td>
        <td>
          <button class="btn btn-sm btn-outline" onclick="alert('Viewing document preview for ${doc.name}')"><i class="fas fa-eye"></i> View</button>
        </td>
      </tr>
    `;
  });
}

/* ── 6. Auth Forms (Login / Register Demo) ── */
function initAuthForms() {
  const loginForm = document.getElementById('applicantLoginForm');
  loginForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail')?.value || 'samuel.kintu@example.com';
    const user = {
      name: email.includes('aisha') ? 'Aisha Mohammed' : 'Samuel Kintu',
      email: email,
      applicationId: email.includes('aisha') ? 'APP-2026-000124' : 'APP-2026-000123'
    };
    localStorage.setItem('nilebridge_active_user', JSON.stringify(user));
    window.location.href = 'dashboard.html';
  });

  const demoApplicantBtn = document.getElementById('quickDemoApplicantLogin');
  demoApplicantBtn?.addEventListener('click', () => {
    localStorage.setItem('nilebridge_active_user', JSON.stringify(DEFAULT_USER));
    window.location.href = 'dashboard.html';
  });
}
