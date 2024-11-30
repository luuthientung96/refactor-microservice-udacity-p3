**Project Deployment Results**

This repository contains the results of deploying our application using Docker, EKS, and CI/CD pipelines. Screenshots documenting the process and outputs are located in the Screenshot Submit folder. Below is a breakdown of the included contents:

**1. Docker Images**

Screenshots of Docker images uploaded to the DockerHub repository.

**2. CI/CD Pipeline**

Initially set up with TravisCI, but due to the availability of a free plan, the build pipeline was migrated to CircleCI.
Screenshots show successful build jobs in the CircleCI pipeline.

**3. Kubernetes Outputs**

**Pods Information:**

Screenshot of the kubectl get pods command output, showing the status of pods running in the Kubernetes cluster.

**Services Description:**

Screenshot of the kubectl describe services command output, providing detailed information about Kubernetes services.

**Horizontal Pod Autoscaler (HPA):**

Screenshot of the kubectl describe hpa command output, detailing the autoscaling setup for the pods.

**Pod Logs:**

Screenshot of the kubectl logs <pod-name> command output, showing logs for a specific pod.

