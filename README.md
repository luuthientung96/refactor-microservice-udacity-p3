**Project Deployment Results**
![image](https://github.com/user-attachments/assets/09257449-f74d-4865-a28e-41d57afdde59)

This repository contains the results of deploying our application using Docker, EKS, and CI/CD pipelines. Screenshots documenting the process and outputs are located in the Screenshot Submit folder. Below is a breakdown of the included contents:

**1. Docker Images**

Screenshots of Docker images uploaded to the DockerHub repository.
![image](https://github.com/user-attachments/assets/a8eaddc7-6226-424c-b6c3-25cf3d5dcd48)

**2. CI/CD Pipeline**

Initially set up with TravisCI, but due to the availability of a free plan, the build pipeline was migrated to CircleCI.
Screenshots show successful build jobs in the CircleCI pipeline.
![image](https://github.com/user-attachments/assets/67297533-b833-4e06-9ffb-b3ab70ff8c90)

**3. Kubernetes Outputs**

**Pods Information:**

Screenshot of the kubectl get pods command output, showing the status of pods running in the Kubernetes cluster.
![image](https://github.com/user-attachments/assets/d6b3526d-161b-44ef-a85f-7302ddd843d7)


**Services Description:**
![image](https://github.com/user-attachments/assets/1ebfade2-f98a-4a57-8307-48a11479e51a)
![image](https://github.com/user-attachments/assets/719297e2-3f2b-4f0a-99bc-b99d81bb4081)
![image](https://github.com/user-attachments/assets/e2ece1b0-e628-4d96-9702-c06ee07ae31c)


Screenshot of the kubectl describe services command output, providing detailed information about Kubernetes services.


**Horizontal Pod Autoscaler (HPA):**

Screenshot of the kubectl describe hpa command output, detailing the autoscaling setup for the pods.
![image](https://github.com/user-attachments/assets/a338f913-73d9-4323-8d02-c97597f4450f)



**Pod Logs:**

Screenshot of the kubectl logs <pod-name> command output, showing logs for a specific pod.
![image](https://github.com/user-attachments/assets/e055c61f-0b28-4dc8-b8b8-cf735d7a4d56)


