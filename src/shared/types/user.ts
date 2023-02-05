export type UserType = {
	fullName: string;
	email: string;
	_id: string;
	avatarUrl?: string;
};

export type UserWithAuthType = UserType & {token: string};
