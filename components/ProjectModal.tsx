import { Project } from "@/@types/project";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  styled,
} from "@mui/material";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const ProjectModal = ({
  open,
  onClose,
  project,
}: {
  project: Project | null;
  open: boolean;
  onClose: () => void;
}) => {
  if (!project) return <></>;
  return (
    <Dialog open={open} onClose={onClose}>
      <div className="flex flex-col relative bg-[#1e1e1e] w-full">
        <img
          alt={project.title}
          src={project.img}
          className="h-[250px] w-auto"
          style={{
            WebkitMaskImage:
              "-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1), rgba(0,0,0,0))",
          }}
        />
        <div className="flex flex-col px-4 pb-4 gap-3">
          <p className="text-[#fff] text-center text-[32px]">{project.title}</p>
          <p className="text-[#fff]">{project.des}</p>
          <div className="flex flex-row items-center"></div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProjectModal;
