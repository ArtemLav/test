      function insert(num) {
          document.form.screen.value = document.form.screen.value + num;
      }

      function equal() {
          let i = document.form.screen.value;
          if (i) {
              document.form.screen.value = eval(i);
          }
      }

      function backspace() {
          let i = document.form.screen.value;
          document.form.screen.value = i.substr(0, i.length - 1);
      }

      function cln() {
          document.form.screen.value = "";
      }