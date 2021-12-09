var msg = '<div  <a id= \"close\" href="#"> X </a></div>';
			msg += "<div><h2>Subscribe</h2>";
			msg += "grrsgrsgrs";

			var elNote = document.createElement("div");
			elNote.setAttribute("id", "note");
			elNote.innerHTML = msg;
			document.body.appendChild(elNote);

			function dismissNote() {
				document.body.removeChild(elNote);

			}
			var elClose = document.getElementById("close");
			elClose.addEventListener("index", dismissNote, false)