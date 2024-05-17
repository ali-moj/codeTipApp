export class ApiUrlList {

  //local server
  // static siteUrlWithoutLast = 'http://localhost:8085';
  // static siteUrl = 'http://localhost:8085';

  // local
  static port = '8085';
  static ip = 'localhost';
  static siteUrlWithoutLast = `http://${ApiUrlList.ip}:${ApiUrlList.port}`;
  static siteUrl = `http://${ApiUrlList.ip}:${ApiUrlList.port}`;


  static baseUrl = `${ApiUrlList.siteUrl}/api`;

  // socket
  static websocketUrl = `ws://${ApiUrlList.ip}:${ApiUrlList.port}/codeTipSocket?token=`;
  static subscribtionUrl = "/user/queue/room/1";

  //category
  static categoryList = `${ApiUrlList.baseUrl}/category/list`;
  static createCategory = `${ApiUrlList.baseUrl}/category/save`;
  static editCategory = `${ApiUrlList.baseUrl}/category/edit`;
  static categoryByPage = `${ApiUrlList.baseUrl}/category/by-page`;
  static deleteCategory = `${ApiUrlList.baseUrl}/category/delete/`;


  //tag
  static tagList = `${ApiUrlList.baseUrl}/tag/list`;
  static createTag = `${ApiUrlList.baseUrl}/tag/save`;
  static editTag = `${ApiUrlList.baseUrl}/tag/edit`;
  static tagByPage = `${ApiUrlList.baseUrl}/tag/by-page`;
  static deleteTag = `${ApiUrlList.baseUrl}/tag/delete/`;


  //topic
  static topics = `${ApiUrlList.baseUrl}/topic`;
  static topicsByPage = `${ApiUrlList.baseUrl}/topic/by-page`;
  static deleteTopic = `${ApiUrlList.baseUrl}/topic/delete/`;
  static topicList = `${ApiUrlList.baseUrl}/topic/list`;
  static saveTopic = `${ApiUrlList.baseUrl}/topic/save-topic/`;
  static topicByCategory = `${ApiUrlList.baseUrl}/topic/by-category/`;
  static getTopic = `${ApiUrlList.baseUrl}/topic/get-topic/`;
  static searchTopic = `${ApiUrlList.baseUrl}/topic/search/`;
  static topicFiles = `${ApiUrlList.baseUrl}/topic/topic-file`;
  static deleteTopicFile = `${ApiUrlList.baseUrl}/topic/delete-file`;
  static topicByTag = `${ApiUrlList.baseUrl}/topic/by-tags/`;

  //topic file
  static upload = `${ApiUrlList.baseUrl}files/upload/`;
  static fileList = `${ApiUrlList.baseUrl}files/paged-list/`;
  static deleteFile = `${ApiUrlList.baseUrl}files/delete/`;


  //chat urls
  static getUserList = `${ApiUrlList.baseUrl}/chat/user-list/`;
  static createNewChatRoom = `${ApiUrlList.baseUrl}/chat/create-room/`;
  static editRoom = `${ApiUrlList.baseUrl}/chat/edit-room/`;
  static userRoomList = `${ApiUrlList.baseUrl}/chat/user-rooms/`;
  static sendMessage = `${ApiUrlList.baseUrl}/chat/send-message`;
  static roomMessage = `${ApiUrlList.baseUrl}/chat/room-message/`;
  static roomPrevMessage = `${ApiUrlList.baseUrl}/chat/room-prev-message/`;
  static createNewUser = `${ApiUrlList.baseUrl}/chat/create-new-user/`;
  static sendFileMessage = `${ApiUrlList.baseUrl}/chat/file-message/`;
  static roomList = `${ApiUrlList.baseUrl}/chat/room-list/`;
  static addRoomUser = `${ApiUrlList.baseUrl}/chat/add-user`;
  static removeRoomUser = `${ApiUrlList.baseUrl}/chat/remove-user`;
  static seenMessage = `${ApiUrlList.baseUrl}/chat/seen`;


  //open url
  static auth = `${ApiUrlList.siteUrl}/account/auth`;
  static register = `${ApiUrlList.siteUrl}/account/register`;
  static testUpload = `${ApiUrlList.siteUrl}/account/test-upload`;


  static getReminders = `${ApiUrlList.baseUrl}/reminder/get-reminders`;
  static saveReminders = `${ApiUrlList.baseUrl}/reminder/save/`;
  static editReminders = `${ApiUrlList.baseUrl}/reminder/edit/`;
  static deleteReminders = `${ApiUrlList.baseUrl}/reminder/delete/`;

  // socket url
  static socketUrl = `${ApiUrlList.siteUrl}/socket`;
  static connectUrl = '/chat';
  static sendMessageUrl = '/app/send/message';

  //users
  static userList = `${ApiUrlList.baseUrl}/users/list/`;
  static saveUser = `${ApiUrlList.baseUrl}/users/save/`;
  static roomUsers: string = `${ApiUrlList.baseUrl}/users/room-members`;
  static editUser: string = `${ApiUrlList.baseUrl}/users/edit`;

  // task url
  static projectList = `${ApiUrlList.baseUrl}/projects/get-all-by-user`;
  static createProject = `${ApiUrlList.baseUrl}/projects/save`;
  static cardList = `${ApiUrlList.baseUrl}/project-cards/get-by-project`;
  static saveProjectCard = `${ApiUrlList.baseUrl}/project-cards/save`;
  static saveProjectTask = `${ApiUrlList.baseUrl}/project-tasks/save`;
  static deleteProjectTask = `${ApiUrlList.baseUrl}/project-tasks`;
  static updateProjectCard = `${ApiUrlList.baseUrl}/project-cards/update`;
  static updateProjectTask = `${ApiUrlList.baseUrl}/project-tasks/update`;
  static updateTaskArrange = `${ApiUrlList.baseUrl}/project-tasks/update-task-arrange`;
  static deleteProjectCard = `${ApiUrlList.baseUrl}/project-cards`;
  static deleteProject = `${ApiUrlList.baseUrl}/projects`;
  static updateProject = `${ApiUrlList.baseUrl}/projects/update`;
  static commentList = `${ApiUrlList.baseUrl}/comments/get-all-by-task`;
  static saveComment = `${ApiUrlList.baseUrl}/comments/save`;
  static updateComment = `${ApiUrlList.baseUrl}/comments/update`;

  // document
  static documentList = `${ApiUrlList.baseUrl}/document/list`;
  static document = `${ApiUrlList.baseUrl}/document`;
  static createDocument = `${ApiUrlList.baseUrl}/document/save`;
  static editDocument = `${ApiUrlList.baseUrl}/document/edit`;
  static documentByPage = `${ApiUrlList.baseUrl}/document/by-page`;
  static deleteDocument = `${ApiUrlList.baseUrl}/document/delete/`;

  //file-managers
  static getRootFolders = `${ApiUrlList.siteUrl}/file-manager/root-folders/`;
  static saveFolders = `${ApiUrlList.siteUrl}/file-manager/add-folder/`;
  static uploadFile = `${ApiUrlList.siteUrl}/file-manager/upload-file/`;
  static getFolderFiles= `${ApiUrlList.siteUrl}/file-manager/folder-files/`;
  // static getRootFolders = `${ApiUrlList.siteUrl}/file-manager//`;
  // static getRootFolders = `${ApiUrlList.siteUrl}/file-manager//`;
  // static getRootFolders = `${ApiUrlList.siteUrl}/file-manager//`;
  // static getRootFolders = `${ApiUrlList.siteUrl}/file-manager//`;
  // static getRootFolders = `${ApiUrlList.siteUrl}/file-manager//`;
  // static getRootFolders = `${ApiUrlList.siteUrl}/file-manager//`;
  // static getRootFolders = `${ApiUrlList.siteUrl}/file-manager//`;
  // static getRootFolders = `${ApiUrlList.siteUrl}/file-manager//`;

}
