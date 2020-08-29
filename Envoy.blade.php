@servers(['web' => '192.168.100.101'])

@setup
    # User/project variables

    # System variables
    $repository_ip = '192.168.100.101';
    $gitlab_username = $dockeruser;
    $gitlab_project_name = $project;
    $gitlab_project__branch_name = $branch;
    $repository = 'git@'. $repository_ip .':'. $gitlab_username .'/'. $gitlab_project_name .'.git';
    $dockerhub_url = $dockerhub;
    $image_tag = $gitlab_username .'/'. $gitlab_project_name .':'. $gitlab_project__branch_name;
@endsetup

@story('deploy')
    run_docker
    build_project
    docker_system_prune
@endstory

@task('run_docker')
    echo "Running docker ({{ $image_tag }})"
    docker login -u {{ $dockeruser }} -p {{ $dockerpwd }} {{ $dockerhub_url }}
    docker pull {{ $dockerhub_url }}{{ $image_tag }}
    docker rm -f {{ $gitlab_project_name }} || true
    docker run -p {{ $port }}:80 --name {{ $gitlab_project_name }} -d {{ $dockerhub_url }}{{ $image_tag }}
    sleep 30
@endtask

@task('build_project')
    echo 'Building project'
    docker exec -w /app {{ $gitlab_project_name }} npm install -g @angular/cli --yes
    docker exec -w /app {{ $gitlab_project_name }} ng build
@endtask

@task('docker_system_prune')
    echo "Pruning docker system"
    docker system prune -f -a --volumes
@endtask

