# tcb repo

腾讯云云开发资源仓库

## 配置

### tcbRepo.appRoot

指定微搭应用的目录(需为相对路径)

### tcbRepo.functionRoot

指定云函数的目录(需为相对路径)

### tcbRepo.apisRoot

指定 APIs 的目录(需为相对路径)

### tcbRepo.modelRoot

指定数据模型的目录(需为相对路径)

### tcbRepo.webappRoot

指定静态应用的目录(需为相对路径)

### tcbRepo.appMappings

指定微搭应用 name 与 目录名的映射关系

微搭应用 name 是微搭应用的唯一标识，一旦创建即不可修改。但你可通过配置来指定微搭应用的 name 与 目录名的映射关系

假设你的微搭应用的 name 为 `app-1`，你想映射到目录名为 `hello-app`，则可以配置如下：

```json
{
  "tcbRepo": {
    "appRoot": "app",
    "appMappings": {
      "app-1": "hello-app"
    }
  }
}
```

现在，你的应用 app-1 的路径为 `app/hello-app`

### tcbRepo.functionMappings

指定云函数 name 与 目录名的映射关系，使用方式同 [appMappings](#appMappings)

### tcbRepo.apisMappings

指定 APIs name 与 目录名的映射关系，使用方式同 [appMappings](#appMappings)

### tcbRepo.modelMappings

指定数据模型 name 与 目录名的映射关系，使用方式同 [appMappings](#appMappings)

### tcbRepo.webappMappings

指定静态应用 name 与 目录名的映射关系，使用方式同 [appMappings](#appMappings)
