type Member = {
 _id: string;
 name: string;
 email: string;
 password: string;
}

type Room = {
 _id: string,
 room_creator: string,
 member_id: string,
 room_name: string,
 room_description: string,
}

type Task = {
 _id: string,
 task_creator: string,
 member_id: string,
 room_id: string,
 task_name: string,
 task_description: string,
 task_status: boolean,
}