/* =========================================================
   SPEECH — đọc tiếng Anh bằng giọng tổng hợp của trình duyệt
   (Web Speech API, miễn phí, không cần mạng trên đa số máy).
   Chưa có file ghi âm người thật; giao diện ghi rõ điều này.
   ========================================================= */
(function () {
  "use strict";

  var synth = window.speechSynthesis || null;
  var voice = null;
  var currentBtn = null;

  function pickVoice() {
    if (!synth) return;
    var voices = synth.getVoices();
    voice =
      voices.filter(function (v) { return v.lang === "en-US" && /natural|online|google/i.test(v.name); })[0] ||
      voices.filter(function (v) { return v.lang === "en-US"; })[0] ||
      voices.filter(function (v) { return /^en/i.test(v.lang); })[0] ||
      null;
  }
  if (synth) {
    pickVoice();
    if (typeof synth.onvoiceschanged !== "undefined") synth.onvoiceschanged = pickVoice;
  }

  function clearBtn() {
    if (currentBtn) {
      currentBtn.classList.remove("is-playing");
      currentBtn.setAttribute("aria-pressed", "false");
      currentBtn = null;
    }
  }

  var speech = {
    supported: function () { return !!(synth && window.SpeechSynthesisUtterance); },

    stop: function () {
      if (synth) synth.cancel();
      clearBtn();
    },

    // lines: chuỗi hoặc mảng chuỗi (đọc lần lượt). btn: nút đang bấm (để đổi trạng thái)
    speak: function (lines, btn, rate) {
      if (!speech.supported()) return false;
      var wasPlayingThis = currentBtn && currentBtn === btn;
      speech.stop();
      if (wasPlayingThis) return true; // bấm lần nữa = dừng

      var list = Array.isArray(lines) ? lines : [lines];
      if (btn) {
        currentBtn = btn;
        btn.classList.add("is-playing");
        btn.setAttribute("aria-pressed", "true");
      }
      list.forEach(function (text, i) {
        var u = new SpeechSynthesisUtterance(text);
        u.lang = "en-US";
        if (voice) u.voice = voice;
        u.rate = rate || 0.92;
        if (i === list.length - 1) {
          u.onend = function () { if (currentBtn === btn) clearBtn(); };
          u.onerror = function () { if (currentBtn === btn) clearBtn(); };
        }
        synth.speak(u);
      });
      return true;
    }
  };

  window.EOH.speech = speech;
})();
