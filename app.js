document.addEventListener('DOMContentLoaded', () => {
    // --- Dashboard Quick Actions ---
    const addPatientBtn = document.querySelector('#addPatientBtn');
    if (addPatientBtn) {
        addPatientBtn.addEventListener('click', () => {
            alert('Navigating to the patient registration page.');
            // In a real application, you would use:
            // window.location.href = 'PatientRegistration.html';
        });
    }

    const scheduleAppointmentBtn = document.querySelector('#scheduleAppointmentBtn');
    if (scheduleAppointmentBtn) {
        scheduleAppointmentBtn.addEventListener('click', () => {
            alert('Navigating to the appointment scheduler.');
            // In a real application, you would use:
            // window.location.href = 'AppointmentScheduler.html';
        });
    }

    const generateReportBtn = document.querySelector('#generateReportBtn');
    if (generateReportBtn) {
        generateReportBtn.addEventListener('click', () => {
            alert('Navigating to the reports page.');
            // In a real application, you would use:
            // window.location.href = 'Reports.html';
        });
    }

    // We can add more event listeners for other pages here as we go.
});
