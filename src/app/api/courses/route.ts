import { NextRequest, NextResponse } from 'next/server';
import { getCourses, addCourse } from '@/lib/courses';
import { Course } from '@/types/course';

export async function GET() {
  try {
    const courses = getCourses();
    return NextResponse.json(courses);
  } catch (error) {
    console.error('Error fetching courses:', error);
    return NextResponse.json(
      { error: 'Failed to fetch courses' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const newCourse = addCourse({
      title: body.title,
      description: body.description,
      location: body.location,
      price: body.price,
      duration: body.duration,
      instructor: body.instructor,
      startDate: body.startDate || undefined,
      schedule: body.schedule || undefined,
      maxStudents: body.maxStudents || undefined,
      prerequisites: body.prerequisites || undefined,
      category: body.category,
    });

    return NextResponse.json(newCourse, { status: 201 });
  } catch (error) {
    console.error('Error adding course:', error);
    return NextResponse.json(
      { error: 'Failed to add course' },
      { status: 500 }
    );
  }
}
