import { BaseEntity, Column } from 'typeorm'

export default class Category extends BaseEntity {

	@Column()
	name: string

}
