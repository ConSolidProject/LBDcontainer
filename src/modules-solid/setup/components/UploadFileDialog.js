import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  DialogContentText,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";

const typeExtensions = {
  graph: ["ttl", "rdf"],
  ifc: ["ifc"],
};


const lbdContext = require("../context.json");

const { default: data } = require("@solid/query-ldflex");

const UploadFileDialog = (props) => {
  // const classes = useStyles();
  const [fileToUpload, setFileToUpload] = useState(null);
  const [loading, setLoading] = useState(null);
  const [label, setLabel] = useState("");
  const [description, setDescription] = useState("");

  function handleInput(e) {
    e.preventDefault();
    setFileToUpload(e.target.files[0]);
  }
  const project = data[`${props.currentProject[props.session.info.webId].uri}.props#this`];

  async function uploadInput(e) {
    e.preventDefault();
    try {
      const uploadType = extractUploadType();
      switch (uploadType) {
        case "ifc":
          await uploadIFCtoServer();
          break;
        case "graph":
          await uploadNamedGraphToServer();
          break;
        case "document":
          await uploadDocumentToServer();
          break;
        case "newGraph":
          await uploadNewGraphToServer();
          break;
        default:
          break;
      }
      beforeClose();
    } catch (error) {
      console.log("error", error);
      beforeClose(error);
    }
  }

  async function uploadIFCtoServer() {

  }

  async function uploadNamedGraphToServer() {

  }

  async function uploadDocumentToServer() {

  }

  async function uploadNewGraphToServer() {
      
  }
  

  async function extractUploadType() {
    let uploadType;
    const ext =
      fileToUpload.name.split(".")[fileToUpload.name.split(".").length - 1];
    for (const type of Object.keys(typeExtensions)) {
      if (typeExtensions[type].includes(ext)) {
        uploadType = type;
      }
    }
    if (!uploadType) {
      uploadType = "document";
    }
    return uploadType;
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Upload a resource</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Upload a resource to your project vault.
          </DialogContentText>
        </DialogContent>
        <input
          display="none"
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleInput}
          style={{
            margin: "20px",
            marginTop: "20px",
          }}
        />

        <DialogActions>
          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={uploadInput}
            variant="contained"
            color="secondary"
            component="span"
            startIcon={<CloudUploadIcon fontSize="large" />}
            disabled={!fileToUpload || loading}
          >
            Upload
            {loading && <CircularProgress size={20} />}{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

async function convertIFC(file, type, baseUri) {
  const formData = new FormData();
  formData.append("ifcFile", file, file.name);

  if (baseUri) {
    formData.append("baseUri", baseUri);
  }

  const response = await axios.post(`http://localhost:4800/${type}`, formData, {
    responseType: "arraybuffer",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("response.data", response.data);
  const toFile = new File([response.data], "conversion.ttl");
  console.log("file", toFile);
  return toFile;
}

export default UploadFileDialog;
