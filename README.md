# React Spring Boot K8s Deployment
A React Spring Boot Full Stack application deployment repository using K8s

## Install Minikube

### Installing Docker Runtime

```shell
yum install docker
```

### Installing Minikube Binary

- For Linux based instances, run the following commands:

```shell
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
```

- Start Minikube.

```shell
minikube start
```

### Installing `kubectl` Binary

- Add reference of Kubernetes repository to existing RedHat repo.

```shell
cat <<EOF | sudo tee /etc/yum.repos.d/kubernetes.repo
[kubernetes]
name=Kubernetes
baseurl=https://pkgs.k8s.io/core:/stable:/v1.29/rpm/
enabled=1
gpgcheck=1
gpgkey=https://pkgs.k8s.io/core:/stable:/v1.29/rpm/repodata/repomd.xml.key
EOF
```

- Install `kubectl` through `yum`.

```shell
sudo yum install -y kubectl
```

## Steps to run the code

### 1. Clone this repository

```shell
git clone https://github.com/prasadashu/react_spring_k8_deployment.git
```

### 2. Change directory to Kubernetes deployment manifest files

```shell
cd react_spring_k8_deployment/student_deployment/
```

### 3. Create MySQL Deployment

- Change directory to `data-tier`

```
cd data-tier
```

- Create <b>Persistent Volume Claim</b>

```shell
kubectl create -f mysql-pvc.yml
```

- Create MySQL <b>ConfigMap</b>

```shell
kubectl create -f mysql-configmap.yml
```

- Create MySQL <b>Secrets</b>

```shell
kubectl create -f mysql-secrets.yml
```

- Create MySQL <b>Deployment</b>

```shell
kubectl create -f mysql-deployment.yml
```

- Create MySQL <b>Service</b>

```shell
kubectl create -f mysql-service.yml
```

### 4. Create Spring Boot Deployment

- Create Spring Boot <b>ConfigMap</b>

```shell
kubectl create -f spring-configmap.yml
```

- Create Spring Boot <b>Secrets</b>

```shell
kubectl create -f spring-secrets.yml
```

- Create Spring Boot <b>Deployment</b>

```shell
kubectl create -f spring-deployment.yml
```

- Create Spring Boot <b>Service</b>

```shell
kubectl create -f spring-service.yml 
```

### 5. Create React Deployment

- Create React <b>ConfigMap</b>

```shell
kubectl create -f react-configmap.yml
```

- Create React <b>Deployment</b>

```shell
kubectl create -f react-deployments.yml
```

- Create React <b>Service</b>

```shell
kubectl create -f react-service.yml
```

## Service Port Forwarding

- Port forwarding from Minikube cluster to Localhost can be done using the below command:

```shell
kubectl port-forward svc/<service_name> <host_port>:<node_port>
```

## Access React UI

- The React UI can be accessed at port `30000`.

## Miscellaneous
- Spring Boot Version: `v3.2.0`
- JDK Version: `21.0.1`
- Minikube: `v1.32.0`
