document.querySelectorAll(".release-calf-button").forEach((button) => {
    button.addEventListener("click", function () {
      const calfId = this.getAttribute("data-id");
      Swal.fire({
        title: "Desea largar este ternero a la recria, coloque el peso por favor",
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "Sí",
        cancelButtonText: "No",
        html: `
        <input id="weightReleased" name="weightReleased" type="number" placeholder="Colocar el peso en kilos(número)" style="width: 100%; margin-top: 10px;">
        `,
        preConfirm: () => {
           return {
            weightReleased: document.getElementById('weightReleased').value
        };
        }
      }).then((result) => {
        if (result.isConfirmed) {
          const releasedWeight = result.value.weightReleased;
          const form = document.querySelector(`form[action="/calf/released/${calfId}"]`);
          const weightReleasedInput = document.createElement('input');
          weightReleasedInput.type = 'hidden';
          weightReleasedInput.name = 'releasedWeight';
          weightReleasedInput.value = releasedWeight;
          form.appendChild(weightReleasedInput);
                
          // Enviar el formulario
          form.submit();
        }
      });
    });
  });