// تفعيل الـ Tooltip لكل الأزرار
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(el => new bootstrap.Tooltip(el));

// دالة موحدة: نسخ + تغيير تولتيب + عرض Alert
function copyWithFeedback(textAreaId, btnId) {
  const textarea = document.getElementById(textAreaId);
  textarea.select();
  document.execCommand("copy");

  //   alert 
  alert(" Text copied successfully!");

  // ✅ تغيير التولتيب
  const btn = document.getElementById(btnId);
  const tooltipInstance = bootstrap.Tooltip.getInstance(btn);

  btn.setAttribute("data-bs-title", " Copied!");
  tooltipInstance.setContent({ '.tooltip-inner': " Copied!" });
  tooltipInstance.show();

  // يرجع التولتيب القديم بعد ثانيتين
  setTimeout(() => {
    btn.setAttribute("data-bs-title", "Copy to clipboard");
    tooltipInstance.setContent({ '.tooltip-inner': "Copy to clipboard" });
  }, 2000);
}
