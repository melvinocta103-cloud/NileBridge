/**
 * NileBridge Institutional Digital Platform
 * Administrative Dashboard & Admissions Management Suite
 */

document.addEventListener('DOMContentLoaded', () => {
  initAdminDashboard();
  initApplicationsManager();
  initProgrammeCMS();
  initNewsCMS();
});

/* ── 1. Admin Dashboard KPIs & Charts ── */
function initAdminDashboard() {
  const kpiContainer = document.querySelector('.kpi-grid');
  if (!kpiContainer) return;

  const apps = window.getNileBridgeStorage();
  const total = apps.length;
  const underReview = apps.filter(a => a.status === 'UNDER_REVIEW' || a.status === 'DOCUMENT_REVIEW').length;
  const approved = apps.filter(a => a.status === 'APPROVED').length;
  const rejected = apps.filter(a => a.status === 'REJECTED').length;

  const totalEl = document.getElementById('kpiTotalApps');
  const reviewEl = document.getElementById('kpiUnderReview');
  const approvedEl = document.getElementById('kpiApproved');
  const rejectedEl = document.getElementById('kpiRejected');

  if (totalEl) totalEl.innerText = total + 1240; // baseline demo count
  if (reviewEl) reviewEl.innerText = underReview + 340;
  if (approvedEl) approvedEl.innerText = approved + 810;
  if (rejectedEl) rejectedEl.innerText = rejected + 90;

  // Render recent submissions in dash
  const recentTableBody = document.getElementById('adminRecentAppsBody');
  if (recentTableBody) {
    recentTableBody.innerHTML = '';
    apps.slice(0, 5).forEach(app => {
      recentTableBody.innerHTML += `
        <tr>
          <td><strong>${app.id}</strong></td>
          <td>${app.applicantName}</td>
          <td>${app.programmeName}</td>
          <td>${app.submittedDate || 'Draft'}</td>
          <td><span class="status-badge ${app.status.toLowerCase()}">${app.status.replace('_', ' ')}</span></td>
          <td>
            <button class="btn btn-sm btn-outline-white" onclick="openAdminReviewModal('${app.id}')">Review</button>
          </td>
        </tr>
      `;
    });
  }
}

/* ── 2. Applications Management Suite ── */
function initApplicationsManager() {
  const tableBody = document.getElementById('adminApplicationsTableBody');
  if (!tableBody) return;

  let currentFilter = 'ALL';
  let searchQuery = '';

  function renderTable() {
    const apps = window.getNileBridgeStorage();
    let filtered = apps;

    if (currentFilter !== 'ALL') {
      filtered = filtered.filter(a => a.status === currentFilter);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      filtered = filtered.filter(a => 
        a.id.toLowerCase().includes(q) || 
        a.applicantName.toLowerCase().includes(q) || 
        a.programmeName.toLowerCase().includes(q) ||
        a.email.toLowerCase().includes(q)
      );
    }

    tableBody.innerHTML = '';
    if (!filtered.length) {
      tableBody.innerHTML = `<tr><td colspan="7" style="text-align: center; padding: 40px; color: #94A3B8;">No applications found matching your criteria.</td></tr>`;
      return;
    }

    filtered.forEach(app => {
      tableBody.innerHTML += `
        <tr>
          <td><strong style="color: var(--clr-white);">${app.id}</strong></td>
          <td>
            <div><strong>${app.applicantName}</strong></div>
            <div style="font-size: 12px; color: #94A3B8;">${app.email}</div>
          </td>
          <td>${app.programmeName}</td>
          <td>${app.campus}</td>
          <td>${app.submittedDate || 'Draft'}</td>
          <td><span class="status-badge ${app.status.toLowerCase()}">${app.status.replace('_', ' ')}</span></td>
          <td>
            <button class="btn btn-sm btn-primary" onclick="openAdminReviewModal('${app.id}')">
              <i class="fas fa-search-plus"></i> Review Dossier
            </button>
          </td>
        </tr>
      `;
    });
  }

  // Filter tab buttons
  const filterBtns = document.querySelectorAll('.admin-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-status');
      renderTable();
    });
  });

  // Search input
  const searchInput = document.getElementById('adminAppSearch');
  searchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderTable();
  });

  renderTable();
}

/* ── 3. Dossier Review Modal ── */
window.openAdminReviewModal = function(appId) {
  const apps = window.getNileBridgeStorage();
  const app = apps.find(a => a.id === appId);
  if (!app) return;

  let modal = document.getElementById('adminReviewModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'adminReviewModal';
    modal.className = 'admin-modal-overlay';
    modal.innerHTML = `
      <div class="admin-modal-container">
        <div class="admin-modal-header">
          <h3 style="color: var(--clr-white); margin: 0;"><i class="fas fa-user-graduate"></i> Applicant Dossier Review</h3>
          <button class="btn btn-sm btn-outline-white" onclick="closeAdminReviewModal()">&times;</button>
        </div>
        <div class="admin-modal-body" id="adminModalBody">
          <!-- Dynamic Content -->
        </div>
        <div class="admin-modal-footer">
          <button class="btn btn-outline-white" onclick="closeAdminReviewModal()">Cancel</button>
          <button class="btn btn-primary" id="saveDecisionBtn">Save Decision & Audit Log</button>
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const body = modal.querySelector('#adminModalBody');
  body.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
      <div style="background: rgba(255,255,255,0.04); padding: 16px; border-radius: 8px;">
        <h4 style="color: #94A3B8; font-size: 13px; text-transform: uppercase;">Applicant Details</h4>
        <p style="margin-bottom: 6px;"><strong>ID:</strong> ${app.id}</p>
        <p style="margin-bottom: 6px;"><strong>Name:</strong> ${app.applicantName}</p>
        <p style="margin-bottom: 6px;"><strong>Email:</strong> ${app.email}</p>
        <p style="margin-bottom: 6px;"><strong>Phone:</strong> ${app.phone}</p>
      </div>
      <div style="background: rgba(255,255,255,0.04); padding: 16px; border-radius: 8px;">
        <h4 style="color: #94A3B8; font-size: 13px; text-transform: uppercase;">Programme Choice</h4>
        <p style="margin-bottom: 6px;"><strong>Programme:</strong> ${app.programmeName}</p>
        <p style="margin-bottom: 6px;"><strong>Faculty:</strong> ${app.facultyName}</p>
        <p style="margin-bottom: 6px;"><strong>Campus:</strong> ${app.campus}</p>
        <p style="margin-bottom: 6px;"><strong>Intake:</strong> ${app.intake}</p>
      </div>
    </div>

    <div style="margin-bottom: 24px;">
      <h4 style="color: #94A3B8; font-size: 13px; text-transform: uppercase; margin-bottom: 12px;">Submitted Verification Documents</h4>
      <div style="display: flex; flex-direction: column; gap: 8px;">
        ${(app.documents || []).map(d => `
          <div style="display: flex; justify-content: space-between; align-items: center; background: rgba(255,255,255,0.03); padding: 10px 14px; border-radius: 6px;">
            <div><i class="fas fa-file-alt" style="color: #38BDF8; margin-right: 8px;"></i> ${d.name} (${d.type})</div>
            <div>
              <span class="status-badge ${d.status === 'VERIFIED' ? 'approved' : d.status === 'NEEDS_REUPLOAD' ? 'rejected' : 'submitted'}">${d.status}</span>
              <button class="btn btn-sm btn-outline-white" style="margin-left: 8px;" onclick="alert('Viewing verified copy of ${d.name}')">Preview</button>
            </div>
          </div>
        `).join('') || '<p style="color: #94A3B8;">No documents attached.</p>'}
      </div>
    </div>

    <div style="background: rgba(255,255,255,0.04); padding: 16px; border-radius: 8px;">
      <h4 style="color: #94A3B8; font-size: 13px; text-transform: uppercase; margin-bottom: 12px;">Admissions Decision & Remarks</h4>
      <div style="margin-bottom: 14px;">
        <label style="display: block; font-size: 12px; margin-bottom: 6px; color: #CBD5E1;">Change Status:</label>
        <select id="modalStatusSelect" class="form-control" style="background: #0F172A; color: white; border: 1px solid rgba(255,255,255,0.2);">
          <option value="SUBMITTED" ${app.status === 'SUBMITTED' ? 'selected' : ''}>SUBMITTED</option>
          <option value="DOCUMENT_REVIEW" ${app.status === 'DOCUMENT_REVIEW' ? 'selected' : ''}>DOCUMENT REVIEW (Needs Extra Docs)</option>
          <option value="UNDER_REVIEW" ${app.status === 'UNDER_REVIEW' ? 'selected' : ''}>UNDER REVIEW (Faculty Review)</option>
          <option value="APPROVED" ${app.status === 'APPROVED' ? 'selected' : ''}>APPROVED (Issue Admission Offer)</option>
          <option value="REJECTED" ${app.status === 'REJECTED' ? 'selected' : ''}>REJECTED (Not Qualified)</option>
        </select>
      </div>
      <div>
        <label style="display: block; font-size: 12px; margin-bottom: 6px; color: #CBD5E1;">Admissions Officer Remarks:</label>
        <textarea id="modalRemarksText" class="form-control" rows="3" style="background: #0F172A; color: white; border: 1px solid rgba(255,255,255,0.2);">${app.remarks || ''}</textarea>
      </div>
    </div>
  `;

  modal.classList.add('active');

  const saveBtn = modal.querySelector('#saveDecisionBtn');
  saveBtn.onclick = () => {
    const newStatus = modal.querySelector('#modalStatusSelect').value;
    const newRemarks = modal.querySelector('#modalRemarksText').value;

    let newProgress = 40;
    if (newStatus === 'DOCUMENT_REVIEW') newProgress = 60;
    if (newStatus === 'UNDER_REVIEW') newProgress = 80;
    if (newStatus === 'APPROVED') newProgress = 100;
    if (newStatus === 'REJECTED') newProgress = 100;

    app.status = newStatus;
    app.remarks = newRemarks;
    app.progress = newProgress;
    app.lastUpdated = new Date().toISOString().split('T')[0];

    window.saveNileBridgeApplications(apps);
    closeAdminReviewModal();
    alert(`Application ${app.id} updated to ${newStatus}. Notification sent to applicant.`);
    location.reload();
  };
};

window.closeAdminReviewModal = function() {
  const modal = document.getElementById('adminReviewModal');
  if (modal) modal.classList.remove('active');
};

/* ── 4. Programme CMS ── */
function initProgrammeCMS() {
  const progTableBody = document.getElementById('adminProgrammesTableBody');
  if (!progTableBody) return;

  const progs = window.NileBridgeData?.programmes || [];
  progTableBody.innerHTML = '';
  progs.forEach(p => {
    progTableBody.innerHTML += `
      <tr>
        <td><strong>${p.code}</strong></td>
        <td><strong>${p.name}</strong></td>
        <td>${p.degreeLevel}</td>
        <td>${p.facultyName}</td>
        <td>${p.duration}</td>
        <td>${p.feePerSemester}</td>
        <td><span class="status-badge approved">PUBLISHED</span></td>
        <td>
          <button class="btn btn-sm btn-outline-white" onclick="alert('Editing programme ${p.name}')"><i class="fas fa-edit"></i> Edit</button>
        </td>
      </tr>
    `;
  });
}

/* ── 5. News CMS ── */
function initNewsCMS() {
  const newsTableBody = document.getElementById('adminNewsTableBody');
  if (!newsTableBody) return;

  const newsList = window.NileBridgeData?.news || [];
  newsTableBody.innerHTML = '';
  newsList.forEach(n => {
    newsTableBody.innerHTML += `
      <tr>
        <td><strong>${n.title}</strong></td>
        <td><span class="card-badge card-badge-primary">${n.category}</span></td>
        <td>${n.author}</td>
        <td>${n.date}</td>
        <td><span class="status-badge approved">PUBLISHED</span></td>
        <td>
          <button class="btn btn-sm btn-outline-white" onclick="alert('Editing article: ${n.title}')"><i class="fas fa-edit"></i></button>
        </td>
      </tr>
    `;
  });
}
